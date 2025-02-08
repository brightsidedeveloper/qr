import { CRUD } from '@brightsidedevelopers/brightbase'
import supabase from './supabase'

const Tables = {
  messages: new CRUD('qr_msgs', supabase),
  token: new CRUD('push', supabase),
}

export default Tables
