<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if (!in_array($user->role, $roles)) {
                $data = [
                    'success' => false,
                    'message' => 'Unauthorized',
                ];
                return response()->json($data, 403);
            }

            return $next($request);
        } catch (JWTException $e) {
            $data = [
                'success' => false,
                'message' => "Token is invalid or expired",
            ];

            return response()->json($data, 401);
        }
    }
}