'connections' => [
'websockets' => [
'driver' => 'pusher',
'key' => env('WEBSOCKET_KEY', 'your-key'),
'secret' => env('WEBSOCKET_SECRET', 'your-secret'),
'app_id' => env('WEBSOCKET_APP_ID', 'your-app-id'),
'options' => [
'cluster' => env('WEBSOCKET_CLUSTER', 'mt1'),
'host' => '127.0.0.1',
'port' => 6001,
'scheme' => 'http'
],
],
],