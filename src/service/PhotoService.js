export const PhotoService = {
    getData(project) {
        if(project == 1){
        return [
            {
                itemImageSrc: "home.png",
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: "squad.png",
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: "gallery.png",
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
        ];
    }
    else if(project == 2)
    {
        return [
            {
                itemImageSrc: "main.jpg",
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: "currency.jpg",
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: "temperature.jpg",
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
        ];
    }
},

    getImages(project) {
        return Promise.resolve(this.getData(project));
    }
};

