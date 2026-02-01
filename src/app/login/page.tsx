'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setLoading(false);

    if (error) alert(error.message);
    else alert('Check je mail voor de login link');
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Login – PokéLand Trade</h1>

      <div style={{ display: 'grid', gap: 10, maxWidth: 420 }}>
        <input
          style={{ padding: 12, borderRadius: 8, border: '1px solid #333' }}
          placeholder="jij@voorbeeld.nl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          style={{ padding: 12, borderRadius: 8 }}
          disabled={loading || !email}
          onClick={login}
        >
          {loading ? 'Bezig…' : 'Login'}
        </button>

        <a href="/">← Terug</a>
      </div>
    </main>
  );
}
