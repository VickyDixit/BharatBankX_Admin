// cache.service.ts
// Place in: src/app/core/services/cache.service.ts

import { Injectable } from '@angular/core';

interface CacheEntry {
  data: any;
  timestamp: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache = new Map<string, CacheEntry>();
  private CACHE_DURATION = 5 * 60 * 1000; // 5 minutes — change as needed

  // Get cached response for a URL
  get(url: string): any | null {
    const entry = this.cache.get(url);
    if (!entry) return null;

    const isExpired = (Date.now() - entry.timestamp) > this.CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(url);
      return null;
    }

    return entry.data;
  }

  // Store response for a URL
  set(url: string, data: any): void {
    this.cache.set(url, {
      data,
      timestamp: Date.now(),
      url
    });
  }

  // Manually clear a specific URL cache (call after POST/PUT/DELETE)
  invalidate(url: string): void {
    // Clears all cache entries that contain the url pattern
    // e.g. invalidate('agent') clears all /api/agent/* cached responses
    this.cache.forEach((_, key) => {
      if (key.includes(url)) {
        this.cache.delete(key);
      }
    });
  }

  // Clear everything
  clearAll(): void {
    this.cache.clear();
  }

  // Check if URL is cached and valid
  has(url: string): boolean {
    return this.get(url) !== null;
  }
}
