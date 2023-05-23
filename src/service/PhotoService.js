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
    else if(project == 3)
    {
        return [
            {
                itemImageSrc: "main.png",
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: "start.png",
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: "ingame.png",
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: "won.png",
                alt: 'Description for Image 4',
                title: 'Title 4'
            }
            ,
            {
                itemImageSrc: "lost.png",
                alt: 'Description for Image 5',
                title: 'Title 5'
            }
        ];
    }
    else if(project == 4)
    {
        return [
            {
                itemImageSrc: "main.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "slider.gif",
                alt: 'Description for Image',
                title: 'Title'
            }
        ];
    }
    else if(project == 5)
    {
        return [
            {
                itemImageSrc: "main.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "queries.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "login.png",
                alt: 'Description for Image',
                title: 'Title '
            }
        ];
    }
    else if(project == 6)
    {
        return [
            {
                itemImageSrc: "main.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "queries.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "login.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "register.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "loggedinmain.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "update.png",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "choosedepartment.png",
                alt: 'Description for Image',
                title: 'Title'
            }
        ];
    }
    else if(project == 7)
    {
        return [
            {
                itemImageSrc: "dan.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "goals.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "calendar.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "settings.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "dodavanjeLoga.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "dodanLog.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "dodavanjeGoalaNotif.jpg",
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: "dodanGoal.jpg",
                alt: 'Description for Image',
                title: 'Title'
            }
        ];
    }
},

    getImages(project) {
        return Promise.resolve(this.getData(project));
    }
};

