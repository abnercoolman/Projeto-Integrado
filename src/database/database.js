import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://smhxusntdxqgjoseasrj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHh1c250ZHhxZ2pvc2Vhc3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDEwNjUsImV4cCI6MjA0MTQ3NzA2NX0.Irw-x0nISIv7N4JgQMS3mqWv6ftuApntbqpACl0g5hQ';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;