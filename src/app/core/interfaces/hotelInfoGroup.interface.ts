export interface HotelInfoI {
    id: string;
    hotel_id: number;
    city: string;
    possibilities: Array<any>;
    max_adult_size: number;
    child_status: boolean;
    room_type: RoomTypeI[];
    room_scenic: RoomScenicI[];
}
export interface RoomTypeI {
    id: number;
    title: string;
    description: string;
    photo: string;
    price: number;
}
export interface RoomScenicI {
    id: number;
    title: string;
    photo: string;
    price_rate: number
}
