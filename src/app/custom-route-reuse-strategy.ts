import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes: Map<string, DetachedRouteHandle> = new Map();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // Decide if the route should be stored
    return true; // Example: Always store the route
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    // Store the route using its path as the key
    if (route.routeConfig && handle) {
      this.storedRoutes.set(route.routeConfig.path!, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // Check if the route exists in the stored routes
    return !!route.routeConfig && this.storedRoutes.has(route.routeConfig.path!);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    // Retrieve the stored route
    if (!route.routeConfig) {
      return null;
    }
    return this.storedRoutes.get(route.routeConfig.path!) || null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // Define when to reuse a route
    return future.routeConfig === curr.routeConfig;
  }
}