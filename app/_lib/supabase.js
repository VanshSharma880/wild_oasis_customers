import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// import { createClient } from '@supabase/supabase-js'
// export const supabaseUrl = 'https://kvizufaanemrmacxlaxm.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aXp1ZmFhbmVtcm1hY3hsYXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NjE3MzMsImV4cCI6MjA0NjUzNzczM30.rJ3Of51P5-mNimT9dYPUuCJslznZWA9-kfsawv79WdM";
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase;