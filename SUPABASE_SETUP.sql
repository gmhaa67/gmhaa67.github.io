create table if not exists public.site_settings (
    id integer primary key,
    settings jsonb not null default '{}'::jsonb,
    updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

drop policy if exists "Public can read site settings" on public.site_settings;
create policy "Public can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

drop policy if exists "Public can save site settings" on public.site_settings;
create policy "Public can save site settings"
on public.site_settings
for insert
to anon, authenticated
with check (id = 1);

drop policy if exists "Public can update site settings" on public.site_settings;
create policy "Public can update site settings"
on public.site_settings
for update
to anon, authenticated
using (id = 1)
with check (id = 1);

insert into public.site_settings (id, settings)
values (1, '{}'::jsonb)
on conflict (id) do nothing;
