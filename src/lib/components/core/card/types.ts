export interface CardProps {
    logo?: string;
    title?: string;
    content?: string;
    startNumber?: number;
    startMax?: number;
    imageUrl?: string;
    isImageButtonMaximized?: boolean;
    videoUrl?: string;
    videoAction?: 'START_REPRODUTION' | 'HOVER_REPRODUTION'
    isVideoButtonMaximized?: boolean;
}