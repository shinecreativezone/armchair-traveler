// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pskbcqqrswvywwjgkbuc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza2JjcXFyc3d2eXd3amdrYnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MjczOTIsImV4cCI6MjA1OTQwMzM5Mn0.7_QPTauIjlocFMDGU20asiV7aBxRmtYZsUUM0HC2sSk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);