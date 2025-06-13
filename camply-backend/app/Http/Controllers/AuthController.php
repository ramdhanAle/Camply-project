<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function register(Request $request) {
        // setup validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|min:2',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:8',
        ]);

        // cek validator
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        // create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        
        // cek keberhasilan
        if ($user) {
            $data = [
                'success' => true,
                'message' => 'User created successfully',
                'data' => $user,
            ];

            return response()->json($data, 201);
        }

        // cek gagal
        $data = [
            'success' => false,
            'message' => 'User creation failed',
        ];

        return response()->json($data, 409);

    }

    public function login(Request $request) {
        // setup validator
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // cek validator
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // get kredensial dari request
        $credentials = $request->only('email', 'password');

        // cek isFailed
        if (!$token = auth()->guard('api')->attempt($credentials)) {
            $data = [
                'success' => false,
                'message' => "Email atau password anda salah!"
            ];

            return response()->json($data, 401);
        }

        // cek isSuccess
        $data = [
            'success' => true,
            'message' => "Login successfully!",
            'user' => auth()->guard('api')->user(),
            'token' => $token,
        ];

        return response()->json($data, 200);
    }

    public function logout(Request $request) {
        try {
            // invalidate token
            JWTAuth::invalidate(JWTAuth::getToken());

            // cek isSuccess
            $data = [
                'success' => true,
                'message' => 'Logout successfully!',
            ];

            return response()->json($data, 200);

        } catch (JWTException $e) {
            // cek isFailed
            $data = [
                'success' => false,
                'message' => 'Logout failed!',
            ];

            return response()->json($data, 500);
        }
    }
}