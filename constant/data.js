import Cat1 from "../assets/images/image_1.png"
import Cat2 from "../assets/images/image_2.png"
import Product1 from "../assets/images/product_1.png"
import HeaderEarthImage from "../assets/images/earth.png"
import Product2 from "../assets/images/product_2.png"
export const categories = [
    {
        id: 1,
        title: "Fret par avion",
        desc: "Lorem lorem lorem lorem lorem",
        img: Cat2,
        path:"PaysLivraison"
    },
    {
        id: 2,
        title: "Fret par bateau",
        desc: "Lorem lorem lorem lorem lorem",
        img: Cat1,
        path:"PaysLivraison"
    },
    {
        id: 3,
        title: "Ventes privées",
        desc: "Lorem lorem lorem lorem lorem",
        img: Cat2,
        path:"ShoppingScreen"
    },
    {
        id: 4,
        title: "Demandes d’achat",
        desc: "Lorem lorem lorem lorem lorem",
        img: Cat1,
        path:"ShoppingScreen"
    },
]

export const products = [
    {
        id: 1,
        title: "Vétements, chaussures et accessoires",
        price: 12,
        old_price: 16,
        image: Product1,
        titleColor: "#94217B",
        bgColor: "rgba(148, 33, 122.70, 0.15)"
    },
    {
        id: 2,
        title: "Bijoux",
        price: 12,
        old_price: 16,
        image: Product2,
        titleColor: "#EB971A",
        bgColor: "rgba(235, 151, 26, 0.15)"
    },
    {
        id: 3,
        title: "Bijoux",
        price: 12,
        old_price: 16,
        image: Product2,
        titleColor: "#EB971A",
        bgColor: "rgba(235, 151, 26, 0.15)"
    },
] 

export const headerHearthNav = [
    {
    id: 1,
    img: HeaderEarthImage,
    title: "GS"
}
]
