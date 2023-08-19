// interface defines sets of rules and regulation a class or an object must follow
interface TakePhoto {
    photoMode: "potrait" | "landscape" | "panorama",
    burst: number,
    filter: string,
}

interface createStory {
    createStory(): string;
}

class Instagram implements TakePhoto {
    constructor(
        public photoMode: "potrait",
        public burst: number,
        public filter: string,
    ) {

    }
}

class Youtube implements TakePhoto, createStory {
     constructor(
        public photoMode: "potrait",
        public burst: number,
        public filter: string,
    ) {

    }

    createStory(): string {
        return "Story was created"
    }
}

export {}

