const Test = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Test</h1>
      <div className="space-y-2">
        <div>
          <strong>VITE_SUPABASE_URL:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1">
            {import.meta.env.VITE_SUPABASE_URL || 'NOT SET'}
          </pre>
        </div>
        <div>
          <strong>VITE_SUPABASE_ANON_KEY:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1 break-all">
            {import.meta.env.VITE_SUPABASE_ANON_KEY ? 
              `${import.meta.env.VITE_SUPABASE_ANON_KEY.substring(0, 50)}...` : 
              'NOT SET'}
          </pre>
        </div>
        <div>
          <strong>VITE_STRIPE_PUBLISHABLE_KEY:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1">
            {import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? 
              `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY.substring(0, 30)}...` : 
              'NOT SET'}
          </pre>
        </div>
        <div>
          <strong>VITE_APP_URL:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1">
            {import.meta.env.VITE_APP_URL || 'NOT SET'}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Test