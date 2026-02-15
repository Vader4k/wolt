import { restaurantService } from "@/services/restaurantService";
import { useQuery } from "@tanstack/react-query";

export const useRestaurants = () => {
    return useQuery({
        queryKey: ['restaurants'],
        queryFn: () => restaurantService.getAll(),
    })
}

export const useRestaurant = (id: string) => {
    return useQuery({
        queryKey: ['restaurant', id],
        queryFn: () => restaurantService.getById(id),
        enabled: !!id,
    })
}

export const useRestaurantMarkers = () => {
    return useQuery({
        queryKey: ['restaurant-markers'],
        queryFn: () => restaurantService.getMarkers(),
    })
}