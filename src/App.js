import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";



const Restaurantcard=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,avgRating,id,costForTwo}=resData?.info
    
   
    return (
        
        <div className="res-card">
           
            <img className="reslogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{avgRating} minutes</h4>
             <h4>{id}</h4>
             <h4>{costForTwo}</h4>

        </div>
    )
}
const resList=[
    {
                    "info": {
                      "id": "217542",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/8acdc3ac-3c96-4bac-9ffd-94230c4bf6a7_217542.JPG",
                      "locality": "Goutam Nagar",
                      "areaName": "Goutam Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "1.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/pizza-hut-goutam-nagar-rest217542",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "196967",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/4765a934-db3f-49ad-8242-8417952e0a3a_196967.JPG",
                      "locality": "Bapuji Nagar",
                      "areaName": "Bapuji Nagar",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.5,
                      "parentId": "547",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-08 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "1.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/kfc-bapuji-nagar-rest196967",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "74500",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/43506566-3ad6-4a75-9ede-ee7e5c911c72_74500.JPG",
                      "locality": "Ashok Nagar",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "2456",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "9.2K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "2.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/dominos-pizza-ashok-nagar-rest74500",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "305807",
                      "name": "Barbeque Nation",
                      "cloudinaryImageId": "pocpd4knzgptsuguulhv",
                      "locality": "Chandrasekharpur",
                      "areaName": "Chandrasekharpur",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "North Indian",
                        "Barbecue",
                        "Kebabs",
                        "Biryani",
                        "Street Food",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2438",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.2K+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "6.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:30:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "13K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/barbeque-nation-chandrasekharpur-rest305807",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "223884",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ff6462a3-7b11-4bd4-a4d8-a74e8884bf28_223884.JPG",
                      "locality": "Jan Path",
                      "areaName": "Kharabela Nagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Momos",
                        "Chinese",
                        "fastfood",
                        "Asian",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1776",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "2.7K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            "description": "Best in Chinese"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                            "description": "Best in Momo"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Chinese.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Chinese",
                                  "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Momo",
                                  "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Chinese.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/wow-momo-jan-path-kharabela-nagar-rest223884",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "464436",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/4/13e5bbd6-5f5f-4d04-bfc7-2344e368b90e_464436.JPG",
                      "locality": "Old Town",
                      "areaName": "Bjb Nagar",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "6249",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "5.4K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-08 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Best in Ice Cream"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Ice Cream",
                                  "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹43"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/nic-ice-creams-old-town-bjb-nagar-rest464436",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "236656",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/640c9783-fd09-4d7e-9a14-48d0d6a6cebb_236656.jpg",
                      "locality": "Kanika Galleria Mall",
                      "areaName": "Gautam Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.6,
                      "parentId": "166",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "33K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-08 01:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Best in Bolt"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Best in Burger"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Best in Corporate"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Bolt",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Burger",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Corporate",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/burger-king-kanika-galleria-mall-gautam-nagar-rest236656",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "262280",
                      "name": "Biryani By Kilo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/039fd6ce-5c84-479a-a330-dcde98768a88_262280.JPG",
                      "locality": "Chandrasekharpur",
                      "areaName": "Chandrasekharpur",
                      "costForTwo": "₹499 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "130",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "13K+",
                      "sla": {
                        "deliveryTime": 54,
                        "lastMileTravel": 7.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "7.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                            "description": "Best in Biryani"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Biryani",
                                  "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "922"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/biryani-by-kilo-chandrasekharpur-rest262280",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "639471",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
                      "locality": "Sachivalay Marg",
                      "areaName": "3PELX MALL",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "Kebabs",
                        "North Indian",
                        "barbeque"
                      ],
                      "avgRating": 4.1,
                      "parentId": "351013",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "1.8K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "6.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:30:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/dum-safar-biryani-sachivalay-marg-3pelx-mall-rest639471",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "85777",
                      "name": "Hotel Maharaja and Fast Food",
                      "cloudinaryImageId": "oapbfe5a3ftryfzjxr7u",
                      "locality": "Hb Colony",
                      "areaName": "Baramunda",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Tandoor",
                        "Biryani"
                      ],
                      "avgRating": 4,
                      "parentId": "100050",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "90K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-08 00:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/hotel-maharaja-and-fast-food-hb-colony-baramunda-rest85777",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "97254",
                      "name": "Scholars",
                      "cloudinaryImageId": "msgcyfeduwjljoahj2fv",
                      "locality": "Jagmohan Nagar",
                      "areaName": "Jagmohan Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Indian",
                        "Biryani",
                        "Kebabs",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "parentId": "9640",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "68K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 6.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "6.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "431"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/scholars-jagmohan-nagar-rest97254",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "464437",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/967bfd4c-eee4-4f6d-824f-5cc7b387b8e5_464437.JPG",
                      "locality": "Lewis Road",
                      "areaName": "OLD TOWN",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-08 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹33"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/grameen-kulfi-lewis-road-old-town-rest464437",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "124810",
                      "name": "Venus Inn Restaurant",
                      "cloudinaryImageId": "ky7ngsms191etm6bkp30",
                      "locality": "Buddha Nagar",
                      "areaName": "Bapuji Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "222728",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "70K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 22:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹29"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/venus-inn-restaurant-buddha-nagar-bapuji-nagar-rest124810",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "107774",
                      "name": "Hotel Shirose",
                      "cloudinaryImageId": "ai5xct3scjpnkrqqkdrb",
                      "locality": "Bapuji Nagar",
                      "areaName": "BJB Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Tandoor"
                      ],
                      "avgRating": 4.5,
                      "parentId": "751577",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "55K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 22:30:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "2.1",
                          "ratingCount": "9"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/hotel-shirose-bapuji-nagar-bjb-nagar-rest107774",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "111472",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/2cef9b18-36bd-4faf-a5a3-c7c806d44dec_111472.JPG",
                      "locality": "New Marrion Complex",
                      "areaName": "Kharabela Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "425",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Best in Ice Cream"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Ice Cream",
                                  "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹15"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/baskin-robbins-ice-cream-desserts-new-marrion-complex-kharabela-nagar-rest111472",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "798354",
                      "name": "Wow! China",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/119c49c1-c8e4-4eff-bc89-ee00e99de4e1_798354.JPG",
                      "locality": "SAHEED NAGAR",
                      "areaName": "BHAWANI MALL",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "fastfood",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4,
                      "parentId": "226836",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "2.0K+",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-08 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                            "description": "Best in Momo"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Momo",
                                  "imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹125"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/wow-china-saheed-nagar-bhawani-mall-rest798354",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "84929",
                      "name": "Afiya Delight",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/8/8b47a7ea-7c17-48cb-8f20-3865327a575c_84929.jpg",
                      "locality": "Tti Colony",
                      "areaName": "Kharabela Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Tandoor"
                      ],
                      "avgRating": 4,
                      "parentId": "22005",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "28K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/afiya-delight-tti-colony-kharabela-nagar-rest84929",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "96571",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ab1376bc-bf63-4e7c-9a9f-c49e8121486d_96571.JPG",
                      "locality": "Rasulgarh",
                      "areaName": "Rasulgarh",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.5,
                      "parentId": "2",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "6.2K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "6.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.1",
                          "ratingCount": "229"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/subway-rasulgarh-rest96571",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "803209",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
                      "locality": "SAHEED NAGAR",
                      "areaName": "BHAWANI MALL",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "4961",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.2K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                            "description": "Best in Pizza"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Best in Pizza",
                                  "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/la-pinoz-pizza-saheed-nagar-bhawani-mall-rest803209",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "78655",
                      "name": "GreenChillyz",
                      "cloudinaryImageId": "mndbi0hzug0hkocncbpl",
                      "locality": "Ashok Nagar",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Tandoor",
                        "Biryani"
                      ],
                      "avgRating": 4.4,
                      "parentId": "399293",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "21K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-04-07 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                            "description": "Best in Local Gems"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                            "description": "Best in Rolls"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": { },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Local Gems",
                                  "imageId": "brand_cards/Badges%202026/62_Best%20in%20Local%20Gems2026.png",
                                  "theme": "light"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Best in Rolls",
                                  "imageId": "brand_cards/Badges%202026/75_Best%20in%20Rolls2026.png",
                                  "theme": "light"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "3.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9852d480-f6e5-4082-9032-c86510cb2d7a"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bhubaneswar/greenchillyz-ashok-nagar-rest78655",
                      "type": "WEBLINK"
                    }
                  }
       

]
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rescontainer">
               {
                resList.map((restaurant)=>(
                <Restaurantcard key={restaurant.info.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
}
const Applayout=()=>{
    return (
        <div className="app">
           
            <Header/>
            <Body/>
          
        </div>
    )
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout/>)