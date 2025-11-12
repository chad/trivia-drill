// Authentication middleware for API routes
import { NextRequest } from 'next/server';
import { extractTokenFromHeader, verifyToken, TokenPayload } from './jwt';

export interface AuthenticatedRequest extends NextRequest {
  user?: TokenPayload;
}

/**
 * Middleware to authenticate API requests
 * Returns the user payload if authenticated, throws error otherwise
 */
export function authenticateRequest(request: NextRequest): TokenPayload {
  const authHeader = request.headers.get('Authorization');
  const token = extractTokenFromHeader(authHeader);

  if (!token) {
    throw new Error('No authentication token provided');
  }

  try {
    return verifyToken(token);
  } catch (error) {
    throw new Error('Invalid or expired authentication token');
  }
}

/**
 * Optional authentication - returns user if authenticated, null otherwise
 */
export function optionalAuth(request: NextRequest): TokenPayload | null {
  try {
    return authenticateRequest(request);
  } catch {
    return null;
  }
}
