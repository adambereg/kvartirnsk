# Схема базы данных kvartirnsk.ru

В рамках микросервисной архитектуры каждый сервис имеет собственную базу данных. Ниже представлены схемы основных сущностей.

## 1. База данных пользователей (PostgreSQL)

```
Таблица: Users
- id (PK)
- email
- password_hash
- role (guest, host, admin)
- first_name
- last_name
- phone
- profile_image
- created_at
- updated_at
- last_login
- is_verified
- verification_token
- is_active
- preferences_json

Таблица: PaymentMethods
- id (PK)
- user_id (FK -> Users.id)
- method_type (card, paypal, etc.)
- details_json
- is_default
- created_at
- updated_at

Таблица: UserBalances
- id (PK)
- user_id (FK -> Users.id)
- balance
- currency
- last_updated
```

## 2. База данных объектов недвижимости (MongoDB)

```
Коллекция: Properties
{
  _id: ObjectId,
  host_id: String, // ID пользователя-владельца
  title: String,
  description: String,
  property_type: String, // apartment, house, etc.
  address: {
    street: String,
    building: String,
    apartment: String,
    postal_code: String,
    city: String,
    neighborhood: String,
    metro_station: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  amenities: [String], // Wi-Fi, air conditioning, etc.
  photos: [
    {
      url: String,
      caption: String,
      order: Number
    }
  ],
  pricing: {
    base_price: Number, // за сутки
    currency: String,
    cleaning_fee: Number,
    min_nights: Number,
    price_periods: [
      {
        from_nights: Number,
        to_nights: Number,
        discount_percent: Number
      }
    ],
    special_prices: [
      {
        date: Date,
        price: Number
      }
    ]
  },
  availability: {
    default_min_nights: Number,
    blocked_dates: [Date],
    custom_min_nights: [
      {
        date: Date,
        min_nights: Number
      }
    ]
  },
  status: String, // active, inactive, pending_review
  is_popular: Boolean,
  promotion: {
    is_promoted: Boolean,
    promotion_text: String,
    end_date: Date
  },
  cancellation_policy: String,
  created_at: Date,
  updated_at: Date
}
```

## 3. База данных бронирований (PostgreSQL)

```
Таблица: Bookings
- id (PK)
- property_id (String, ID объекта из MongoDB)
- guest_id (FK -> Users.id)
- host_id (FK -> Users.id)
- check_in_date
- check_out_date
- total_price
- status (pending, confirmed, cancelled, completed)
- guests_count
- created_at
- updated_at
- cancellation_reason
- cancelled_by
- special_requests
- is_reviewed_by_guest
- is_reviewed_by_host

Таблица: BookingPayments
- id (PK)
- booking_id (FK -> Bookings.id)
- amount
- status (pending, completed, refunded)
- payment_method_id (FK -> PaymentMethods.id)
- transaction_id
- payment_date
- refund_amount
- refund_date
- platform_fee
- host_payout_amount
```

## 4. База данных отзывов и рейтингов (MongoDB)

```
Коллекция: Reviews
{
  _id: ObjectId,
  booking_id: String,
  property_id: String,
  reviewer_id: String,
  reviewee_id: String, // может быть гость или хозяин
  review_type: String, // property_review или guest_review
  rating: Number, // 1-5
  comment: String,
  created_at: Date,
  updated_at: Date,
  status: String, // pending, approved, rejected
  moderation_comment: String
}
```

## 5. База данных сообщений (MongoDB)

```
Коллекция: Conversations
{
  _id: ObjectId,
  participants: [String], // ID пользователей
  created_at: Date,
  updated_at: Date,
  last_message: Date,
  property_id: String // опционально, если связано с объектом
}

Коллекция: Messages
{
  _id: ObjectId,
  conversation_id: ObjectId,
  sender_id: String,
  content: String,
  created_at: Date,
  read: Boolean,
  read_at: Date
}
```

## 6. База данных уведомлений (MongoDB)

```
Коллекция: Notifications
{
  _id: ObjectId,
  user_id: String,
  type: String, // booking_request, message, payment, etc.
  content: String,
  related_entity_id: String, // ID связанного объекта (бронирования, сообщения и т.д.)
  is_read: Boolean,
  created_at: Date,
  read_at: Date
}
```

## 7. Индексы в Elasticsearch

```
Индекс: properties
{
  id: String,
  title: String,
  description: String,
  address: {
    full_text: String,
    city: String,
    neighborhood: String,
    metro_station: String
  },
  amenities: [String],
  property_type: String,
  price: Number,
  rating: Number,
  location: {
    lat: Number,
    lon: Number
  },
  available_dates: [Date],
  host_id: String,
  status: String
}
```

## 8. Хранилище кэша (Redis)

```
- Сессии пользователей
- Результаты поиска
- Доступность объектов на определенные даты
- Кэш объектов для быстрой загрузки страниц
- Лимиты и блокировки для защиты от брутфорса
```

## Взаимосвязи между базами данных

Взаимосвязи между базами данных разных микросервисов поддерживаются через события в брокере сообщений. Например:

1. При создании нового объекта в "Сервисе объектов недвижимости":
   - Данные сохраняются в MongoDB
   - Отправляется событие "property_created" в брокер сообщений
   - "Сервис геолокации" индексирует объект в Elasticsearch

2. При создании бронирования:
   - Данные сохраняются в PostgreSQL
   - Отправляется событие "booking_created" в брокер сообщений
   - "Сервис объектов недвижимости" обновляет доступность объекта
   - "Сервис коммуникации" создает уведомление для владельца 