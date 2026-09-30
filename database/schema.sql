-- Doctors Table

create table public.doctors (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    degree text,
    hospital text,
    experience integer,
    phone text,
    email text,
    address text,
    latitude double precision,
    longitude double precision,
    image text,
    specialization_id uuid,
    created_at timestamp with time zone default now()
);


-- Specializations

create table public.specializations (
    id uuid default gen_random_uuid() primary key,
    name text not null unique,
    description text,
    created_at timestamp with time zone default now()
);


-- Hospitals

create table public.hospitals (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    address text,
    latitude double precision,
    longitude double precision,
    phone text,
    created_at timestamp with time zone default now()
);


-- Doctor Hospital Relation

create table public.doctor_hospitals (
    id uuid default gen_random_uuid() primary key,

    doctor_id uuid references doctors(id)
    on delete cascade,

    hospital_id uuid references hospitals(id)
    on delete cascade,

    chamber_time text,

    created_at timestamp with time zone default now()
);


-- Doctor Availability

create table public.doctor_availability (
    id uuid default gen_random_uuid() primary key,

    doctor_id uuid references doctors(id)
    on delete cascade,

    day text,

    start_time time,

    end_time time,

    created_at timestamp with time zone default now()
);


-- Profiles

create table public.profiles (
    id uuid references auth.users(id)
    primary key,

    full_name text,

    phone text,

    role text default 'patient',

    avatar text,

    created_at timestamp with time zone default now()
);


-- Appointments

create table public.appointments (

    id uuid default gen_random_uuid() primary key,

    patient_id uuid references profiles(id),

    doctor_id uuid references doctors(id),

    appointment_date date,

    appointment_time time,

    status text default 'pending',

    created_at timestamp with time zone default now()

);


-- Reviews

create table public.reviews (

    id uuid default gen_random_uuid() primary key,

    patient_id uuid references profiles(id),

    doctor_id uuid references doctors(id),

    rating integer,

    comment text,

    created_at timestamp with time zone default now()

);