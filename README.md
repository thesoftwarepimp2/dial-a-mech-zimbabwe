
# Dial-A-Mech - WordPress Integration Guide

## Project Overview

**URL**: https://lovable.dev/projects/1aeb56f4-6288-4822-b706-60d68a280a92

Dial-A-Mech is a comprehensive web application for connecting users with trusted mechanics in Zimbabwe. This document outlines how to integrate this React application with a WordPress backend using WordPress REST API.

## WordPress Integration Architecture

### Backend Requirements

The WordPress site will serve as the backend API and admin panel, while the React application handles the frontend user experience.

#### Required WordPress Plugins
1. **WordPress REST API** (core)
2. **Custom Post Type UI** - for creating custom content types
3. **Advanced Custom Fields (ACF)** - for custom fields
4. **JWT Authentication for WP REST API** - for secure authentication
5. **WP User Frontend** - for user management
6. **WooCommerce** (optional) - for payment processing

### WordPress Content Structure

#### 1. Custom Post Types

##### Mechanics (`mechanics`)
```php
// Custom fields needed:
- mechanic_name (text)
- mechanic_avatar (image)
- rating (number)
- review_count (number)
- specialties (repeater/checkbox)
- location (text)
- coordinates (text) // lat,lng format
- price_range (text)
- is_available (boolean)
- response_time (text)
- is_verified (boolean)
- phone_number (text)
- description (textarea)
- operational_hours (repeater)
```

##### Services (`services`)
```php
// Custom fields needed:
- service_name (text)
- service_icon (text/image)
- service_description (textarea)
- base_price (number)
- duration (text)
- category (taxonomy)
```

##### Bookings (`bookings`)
```php
// Custom fields needed:
- user_id (number)
- mechanic_id (number)
- service_id (number)
- booking_date (date)
- booking_time (time)
- status (select: confirmed, in-progress, completed, cancelled)
- location (text)
- price (number)
- notes (textarea)
- rating (number)
- review (textarea)
```

##### Promotions (`promotions`)
```php
// Custom fields needed:
- promo_title (text)
- promo_code (text)
- discount_type (select: percentage, fixed)
- discount_value (number)
- description (textarea)
- valid_until (date)
- min_spend (number)
- is_active (boolean)
```

#### 2. Custom Taxonomies

##### Service Categories (`service_categories`)
- Engine Repair
- Brake Service
- Oil Change
- Transmission
- Electrical
- Bodywork
- Emergency Services

##### Location Areas (`locations`)
- Harare CBD
- Avondale
- Borrowdale
- Eastlea
- Mount Pleasant
- Waterfalls
- Mabvuku
- Greendale

#### 3. User Roles and Capabilities

##### Customer Role
- Create/manage bookings
- View mechanic profiles
- Leave reviews
- Manage profile

##### Mechanic Role
- Manage availability
- View bookings
- Update service details
- Respond to customer inquiries

##### Admin Role
- Approve mechanics
- Manage all content
- View analytics
- Handle disputes

### API Endpoints Structure

#### Authentication Endpoints
```
POST /wp-json/jwt-auth/v1/token
POST /wp-json/wp/v2/users/register
POST /wp-json/wp/v2/users/lost-password
```

#### Mechanics Endpoints
```
GET /wp-json/wp/v2/mechanics
GET /wp-json/wp/v2/mechanics/{id}
POST /wp-json/wp/v2/mechanics (admin only)
PUT /wp-json/wp/v2/mechanics/{id}
GET /wp-json/wp/v2/mechanics?location={area}&service={category}
```

#### Services Endpoints
```
GET /wp-json/wp/v2/services
GET /wp-json/wp/v2/services/{id}
GET /wp-json/wp/v2/services?category={category}
```

#### Bookings Endpoints
```
GET /wp-json/wp/v2/bookings?user={user_id}
POST /wp-json/wp/v2/bookings
PUT /wp-json/wp/v2/bookings/{id}
DELETE /wp-json/wp/v2/bookings/{id}
GET /wp-json/wp/v2/bookings?mechanic={mechanic_id}
```

#### Promotions Endpoints
```
GET /wp-json/wp/v2/promotions?active=true
POST /wp-json/wp/v2/promotions/validate
GET /wp-json/wp/v2/promotions/{code}
```

### React Application Integration

#### Environment Variables
```env
REACT_APP_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
REACT_APP_JWT_AUTH_URL=https://your-wordpress-site.com/wp-json/jwt-auth/v1
REACT_APP_MAPBOX_TOKEN=your_mapbox_token
```

#### API Service Layer
Create services for each endpoint:
- `src/services/authService.ts`
- `src/services/mechanicService.ts`
- `src/services/bookingService.ts`
- `src/services/promotionService.ts`

#### Data Flow
1. **Authentication**: Use JWT tokens for secure API access
2. **Real-time Updates**: Implement polling or WebSockets for booking status
3. **Caching**: Use React Query for efficient data caching
4. **Error Handling**: Comprehensive error boundaries and user feedback

### WordPress Admin Dashboard

#### Custom Admin Pages
1. **Mechanics Management**
   - Approve/reject mechanic applications
   - View mechanic profiles and ratings
   - Manage certifications

2. **Bookings Overview**
   - Real-time booking dashboard
   - Revenue analytics
   - Service popularity metrics

3. **User Management**
   - Customer support interface
   - Dispute resolution
   - User activity logs

4. **Promotions Manager**
   - Create/edit promotional campaigns
   - Track promo code usage
   - ROI analytics

### Implementation Steps

#### Phase 1: WordPress Setup
1. Install WordPress with required plugins
2. Create custom post types and fields
3. Set up user roles and permissions
4. Configure JWT authentication

#### Phase 2: API Development
1. Create custom REST API endpoints
2. Implement authentication middleware
3. Add data validation and sanitization
4. Set up error handling

#### Phase 3: React Integration
1. Update React app to use WordPress API
2. Implement authentication flow
3. Replace mock data with real API calls
4. Add loading states and error handling

#### Phase 4: Testing & Optimization
1. Test all user flows
2. Optimize API performance
3. Implement caching strategies
4. Security audit

### Security Considerations

1. **Input Validation**: Sanitize all user inputs
2. **Rate Limiting**: Prevent API abuse
3. **CORS Configuration**: Properly configure cross-origin requests
4. **SSL/TLS**: Ensure all communication is encrypted
5. **User Permissions**: Implement proper role-based access

### Performance Optimization

1. **Caching**: Implement WordPress object caching
2. **Database**: Optimize queries and indexes
3. **CDN**: Use CDN for static assets
4. **Lazy Loading**: Implement for images and data
5. **Compression**: Enable gzip compression

### Deployment Strategy

1. **Staging Environment**: Test integration thoroughly
2. **Database Migration**: Plan for data migration
3. **DNS Configuration**: Set up proper domain routing
4. **Monitoring**: Implement error tracking and analytics
5. **Backup Strategy**: Regular backups of both systems

This integration will provide a robust, scalable solution that leverages WordPress's content management capabilities while maintaining the modern user experience of the React frontend.

## Current Technologies

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Mapbox GL JS
- React Query

## Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start development server
npm run dev
```

## Deployment

Open [Lovable](https://lovable.dev/projects/1aeb56f4-6288-4822-b706-60d68a280a92) and click Share → Publish.

For custom domains, navigate to Project > Settings > Domains and click Connect Domain.
