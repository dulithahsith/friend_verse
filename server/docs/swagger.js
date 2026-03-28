const swaggerDocument = {
  openapi: "3.0.3",
  info: {
    title: "Friend Verse API",
    version: "1.0.0",
    description: "API documentation for the Friend Verse backend.",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local development server",
    },
  ],
  tags: [
    { name: "Posts", description: "Post management endpoints" },
    { name: "Users", description: "Authentication endpoints" },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      ErrorResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
      User: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "65d0f4f01d2cb2a4de123456",
          },
          name: {
            type: "string",
            example: "John Doe",
          },
          email: {
            type: "string",
            format: "email",
            example: "john@example.com",
          },
          password: {
            type: "string",
            example: "$2b$12$example-hash",
            nullable: true,
          },
          id: {
            type: "string",
            nullable: true,
          },
          picture: {
            type: "string",
            nullable: true,
            example: "https://example.com/avatar.png",
          },
        },
      },
      Post: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "65d0f4f01d2cb2a4de123456",
          },
          title: {
            type: "string",
            example: "Weekend trip",
          },
          message: {
            type: "string",
            example: "Spent the weekend hiking with friends.",
          },
          name: {
            type: "string",
            example: "John Doe",
          },
          creator: {
            type: "string",
            example: "65d0f4f01d2cb2a4de999999",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["travel", "friends"],
          },
          selectedFile: {
            type: "string",
            example: "data:image/png;base64,...",
          },
          likes: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["65d0f4f01d2cb2a4de999999"],
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
      AuthResponse: {
        type: "object",
        properties: {
          result: {
            $ref: "#/components/schemas/User",
          },
          accessToken: {
            type: "string",
          },
          refreshToken: {
            type: "string",
          },
        },
      },
      RefreshResponse: {
        type: "object",
        properties: {
          accessToken: {
            type: "string",
          },
        },
      },
      SignInRequest: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
            format: "email",
            example: "john@example.com",
          },
          password: {
            type: "string",
            example: "secret123",
          },
        },
      },
      SignUpRequest: {
        type: "object",
        required: ["email", "password", "confirmPassword", "firstName", "lastName"],
        properties: {
          email: {
            type: "string",
            format: "email",
            example: "john@example.com",
          },
          password: {
            type: "string",
            example: "secret123",
          },
          confirmPassword: {
            type: "string",
            example: "secret123",
          },
          firstName: {
            type: "string",
            example: "John",
          },
          lastName: {
            type: "string",
            example: "Doe",
          },
        },
      },
      GoogleSignInRequest: {
        type: "object",
        required: ["token"],
        properties: {
          token: {
            type: "string",
            example: "google-oauth-access-token",
          },
        },
      },
      RefreshRequest: {
        type: "object",
        required: ["refreshToken"],
        properties: {
          refreshToken: {
            type: "string",
          },
        },
      },
      CreatePostRequest: {
        type: "object",
        required: ["title", "message", "name"],
        properties: {
          title: {
            type: "string",
            example: "Weekend trip",
          },
          message: {
            type: "string",
            example: "Spent the weekend hiking with friends.",
          },
          name: {
            type: "string",
            example: "John Doe",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
            example: ["travel", "friends"],
          },
          selectedFile: {
            type: "string",
            example: "data:image/png;base64,...",
          },
        },
      },
      UpdatePostRequest: {
        allOf: [
          {
            $ref: "#/components/schemas/CreatePostRequest",
          },
        ],
      },
      DeletePostResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Post deleted successfully",
          },
        },
      },
    },
  },
  paths: {
    "/users/signin": {
      post: {
        tags: ["Users"],
        summary: "Sign in with email and password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SignInRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Sign-in successful",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthResponse",
                },
              },
            },
          },
          400: {
            description: "Invalid credentials",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          404: {
            description: "User not found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/users/googleSignIn": {
      post: {
        tags: ["Users"],
        summary: "Sign in with Google access token",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GoogleSignInRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Google sign-in successful",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthResponse",
                },
              },
            },
          },
          400: {
            description: "Missing token",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          401: {
            description: "Invalid Google token",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/users/signup": {
      post: {
        tags: ["Users"],
        summary: "Create a new user account",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SignUpRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Signup successful",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthResponse",
                },
              },
            },
          },
          400: {
            description: "Validation error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/users/refresh": {
      post: {
        tags: ["Users"],
        summary: "Refresh an access token",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RefreshRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Token refreshed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RefreshResponse",
                },
              },
            },
          },
          401: {
            description: "Missing token",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          403: {
            description: "Invalid or expired refresh token",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/posts": {
      get: {
        tags: ["Posts"],
        summary: "Get all posts",
        responses: {
          200: {
            description: "A list of posts",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Post",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Posts"],
        summary: "Create a new post",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreatePostRequest",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Post created",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Post",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/posts/{id}/like/": {
      patch: {
        tags: ["Posts"],
        summary: "Like or unlike a post",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Updated post",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Post",
                },
              },
            },
          },
          400: {
            description: "Invalid post id",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorResponse",
                },
              },
            },
          },
        },
      },
    },
    "/posts/{id}/": {
      patch: {
        tags: ["Posts"],
        summary: "Update a post",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdatePostRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Updated post",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Post",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Posts"],
        summary: "Delete a post",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Post deleted",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DeletePostResponse",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default swaggerDocument;
