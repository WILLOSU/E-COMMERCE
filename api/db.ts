// db.ts
import { Product, Review } from './types'; // Importe os tipos

const products: Product[] = [
    
        {
          "id": "1",
          "name": "TMA-HD Wireless",
          "category": "headsets",
          "price": 150.0,
          "details": "A high-quality wireless headset with noise-canceling technology and ergonomic design for long listening sessions.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user101",
              "userName": "John Brown",
              "rating": 5,
              "comment": "Amazing sound quality and super comfortable to wear!",
              "postedAt": "2025-01-05"
            },
            {
              "userId": "user102",
              "userName": "Emily Doe",
              "rating": 4,
              "comment": "Great features, but the battery life could be longer.",
              "postedAt": "2025-01-10"
            },
            {
              "userId": "user103",
              "userName": "Michael Carter",
              "rating": 4,
              "comment": "Good noise-canceling and comfort, but a bit bulky for everyday use.",
              "postedAt": "2025-01-20"
            }
          ],
          "popularity": 85,
          "createdAt": "2024-12-25"
        },
        {
          "id": "2",
          "name": "TMA-2 Comfort Wireless",
          "category": "headphones",
          "price": 200.0,
          "details": "Over-ear headphones designed for ultimate comfort, featuring premium sound and long-lasting battery.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user201",
              "userName": "Alice Adams",
              "rating": 5,
              "comment": "Perfect for studio use, with crystal-clear audio.",
              "postedAt": "2025-01-07"
            },
            {
              "userId": "user202",
              "userName": "Mark Smith",
              "rating": 4,
              "comment": "Good build quality, but a bit heavy for outdoor use.",
              "postedAt": "2025-01-08"
            },
            {
              "userId": "user203",
              "userName": "Sophia Miller",
              "rating": 4,
              "comment": "Excellent sound quality, but they feel a bit too tight on the head after long sessions.",
              "postedAt": "2025-01-19"
            }
          ],
          "popularity": 92,
          "createdAt": "2024-12-28"
        },
        {
          "id": "3",
          "name": "PulseBass 360",
          "category": "headsets",
          "price": 120.0,
          "details": "A gaming headset with immersive sound and a built-in microphone for crystal-clear communication.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user301",
              "userName": "Mike Wilson",
              "rating": 5,
              "comment": "Fantastic headset for gaming! The sound is incredibly immersive.",
              "postedAt": "2025-01-12"
            },
            {
              "userId": "user302",
              "userName": "Sophia Garcia",
              "rating": 3,
              "comment": "Good for its price, but the mic could be better.",
              "postedAt": "2025-01-13"
            }
          ],
          "popularity": 78,
          "createdAt": "2024-12-30"
        },
        {
          "id": "4",
          "name": "AudioSphere Max",
          "category": "headphones",
          "price": 250.0,
          "details": "Professional studio headphones with high-fidelity sound and superior noise isolation.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user401",
              "userName": "Laura Rodriguez",
              "rating": 5,
              "comment": "Absolutely perfect for mixing and mastering audio tracks.",
              "postedAt": "2025-01-15"
            },
            {
              "userId": "user402",
              "userName": "Chris Moore",
              "rating": 4,
              "comment": "Excellent audio quality, but the price is a bit high.",
              "postedAt": "2025-01-18"
            }
          ],
          "popularity": 95,
          "createdAt": "2025-01-01"
        },
        {
          "id": "5",
          "name": "BassMaster Pro",
          "category": "headphones",
          "price": 180.0,
          "details": "High-performance studio headphones with deep bass and precise sound clarity.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user501",
              "userName": "Daniel Moore",
              "rating": 5,
              "comment": "Excellent for recording sessions. The bass is unmatched.",
              "postedAt": "2025-01-12"
            },
            {
              "userId": "user502",
              "userName": "Sophia Martin",
              "rating": 3,
              "comment": "Great sound quality, but the ear cups are a bit tight after extended use.",
              "postedAt": "2025-01-15"
            },
            {
              "userId": "user503",
              "userName": "James Thomas",
              "rating": 5,
              "comment": "Absolutely love these headphones! Perfect for mixing and mastering.",
              "postedAt": "2025-01-17"
            }
          ],
          "popularity": 88,
          "createdAt": "2025-01-03"
        },
        {
          "id": "6",
          "name": "EchoTune Wireless",
          "category": "headsets",
          "price": 130.0,
          "details": "Lightweight wireless headset with extended battery life and seamless Bluetooth connection.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user601",
              "userName": "Jessica Moore",
              "rating": 4,
              "comment": "Great for everyday use, though the range could be better.",
              "postedAt": "2025-01-10"
            },
            {
              "userId": "user602",
              "userName": "Michael Thomas",
              "rating": 5,
              "comment": "Excellent headset! Comfortable and the sound quality is superb for the price.",
              "postedAt": "2025-01-14"
            }
          ],
          "popularity": 82,
          "createdAt": "2025-01-05"
        },
        {
          "id": "7",
          "name": "SoundWave Ultra",
          "category": "headphones",
          "price": 210.0,
          "details": "Premium over-ear headphones with active noise-canceling and HD audio quality.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user701",
              "userName": "Ethan Johnson",
              "rating": 5,
              "comment": "Unparalleled sound quality and amazing noise cancellation.",
              "postedAt": "2025-01-11"
            },
            {
              "userId": "user702",
              "userName": "Olivia Harris",
              "rating": 3,
              "comment": "Great headphones, but they are a bit heavy for long listening sessions.",
              "postedAt": "2025-01-13"
            },
            {
              "userId": "user703",
              "userName": "Lucas Smith",
              "rating": 5,
              "comment": "Best headphones I've ever used! Perfect for both music and calls.",
              "postedAt": "2025-01-15"
            }
          ],
          "popularity": 94,
          "createdAt": "2025-01-07"
        },
        {
          "id": "8",
          "name": "VibeBoost 700",
          "category": "headsets",
          "price": 140.0,
          "details": "Gaming headset with surround sound and RGB lighting effects.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user801",
              "userName": "Liam Anderson",
              "rating": 4,
              "comment": "Looks great and performs well, but slightly heavy.",
              "postedAt": "2025-01-13"
            },
            {
              "userId": "user802",
              "userName": "Sophia Taylor",
              "rating": 5,
              "comment": "Fantastic sound and the RGB lighting makes it look awesome!",
              "postedAt": "2025-01-15"
            },
            {
              "userId": "user803",
              "userName": "Benjamin Johnson",
              "rating": 4,
              "comment": "Great for gaming, but the headband could use more padding.",
              "postedAt": "2025-01-17"
            }
          ],
          "popularity": 85,
          "createdAt": "2025-01-09"
        },
        {
          "id": "9",
          "name": "TuneFlex Compact",
          "category": "headphones",
          "price": 60.0,
          "details": "Compact in-ear headphones with impressive sound and noise isolation.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user901",
              "userName": "Sophia Anderson",
              "rating": 5,
              "comment": "Perfect for commuting, great value for the price.",
              "postedAt": "2025-01-15"
            },
            {
              "userId": "user902",
              "userName": "James Williams",
              "rating": 4,
              "comment": "Good sound quality, but could be more comfortable for long periods.",
              "postedAt": "2025-01-16"
            },
            {
              "userId": "user903",
              "userName": "Emily Lee",
              "rating": 5,
              "comment": "Amazing quality for such an affordable price. Love these for daily use!",
              "postedAt": "2025-01-18"
            }
          ],
          "popularity": 89,
          "createdAt": "2025-01-11"
        },
        {
          "id": "10",
          "name": "StudioMaster X5",
          "category": "headphones",
          "price": 270.0,
          "details": "Studio-grade headphones for professionals, delivering precise sound.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user1001",
              "userName": "Benjamin Clark",
              "rating": 5,
              "comment": "Exceptional detail for mixing and mastering.",
              "postedAt": "2025-01-17"
            },
            {
              "userId": "user1002",
              "userName": "Olivia Young",
              "rating": 5,
              "comment": "Great sound quality for professional use.",
              "postedAt": "2025-01-18"
            },
            {
              "userId": "user1003",
              "userName": "Lucas Hall",
              "rating": 5,
              "comment": "Perfect for studio work, extremely accurate sound reproduction.",
              "postedAt": "2025-01-19"
            }
          ],
          "popularity": 96,
          "createdAt": "2025-01-12"
        },
        {
          "id": "11",
          "name": "PulseTrack Pro",
          "category": "headsets",
          "price": 160.0,
          "details": "Wireless headset with adaptive noise cancellation and voice assistant support.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user1101",
              "userName": "Oliver Allen",
              "rating": 5,
              "comment": "Very convenient and sounds great!",
              "postedAt": "2025-01-16"
            },
            {
              "userId": "user1102",
              "userName": "Emily King",
              "rating": 4,
              "comment": "Great noise cancellation, but could use a bit more bass.",
              "postedAt": "2025-01-17"
            }
          ],
          "popularity": 87,
          "createdAt": "2025-01-08"
        },
        {
          "id": "12",
          "name": "HyperSound Edge",
          "category": "headphones",
          "price": 190.0,
          "details": "Gaming headphones with superior sound precision and customizable EQ settings.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user1201",
              "userName": "Lucas Davis",
              "rating": 4,
              "comment": "Top-notch sound for gaming, but a bit pricey.",
              "postedAt": "2025-01-18"
            },
            {
              "userId": "user1202",
              "userName": "Mia Anderson",
              "rating": 5,
              "comment": "Amazing clarity and comfort, perfect for long gaming sessions.",
              "postedAt": "2025-01-19"
            },
            {
              "userId": "user1203",
              "userName": "Ethan Jones",
              "rating": 3,
              "comment": "Good sound, but the build quality could be improved.",
              "postedAt": "2025-01-20"
            }
          ],
          "popularity": 88,
          "createdAt": "2025-01-13"
        },
        {
          "id": "13",
          "name": "ClearVoice HD",
          "category": "headsets",
          "price": 110.0,
          "details": "Wireless headset with crystal-clear microphone and lightweight design for all-day use.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user1301",
              "userName": "Mia Cooper",
              "rating": 5,
              "comment": "Excellent for video calls and meetings!",
              "postedAt": "2025-01-14"
            },
            {
              "userId": "user1302",
              "userName": "Noah Moore",
              "rating": 3,
              "comment": "Good microphone, but the earcups could be more comfortable.",
              "postedAt": "2025-01-16"
            }
          ],
          "popularity": 83,
          "createdAt": "2025-01-10"
        },
        {
          "id": "14",
          "name": "BassDriver Max",
          "category": "headphones",
          "price": 220.0,
          "details": "Over-ear headphones with dynamic bass and premium build quality.",
          "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
          "reviews": [
            {
              "userId": "user1401",
              "userName": "Charlotte Anderson",
              "rating": 5,
              "comment": "The bass is truly incredible!",
              "postedAt": "2025-01-19"
            },
            {
              "userId": "user1403",
              "userName": "Olivia Walker",
              "rating": 4,
              "comment": "Great sound and build quality, but I wish it had a longer battery life.",
              "postedAt": "2025-01-21"
            },
            {
              "userId": "user1404",
              "userName": "James Allen",
              "rating": 4,
              "comment": "Solid headphones with great bass, but I think they could be more comfortable for extended use.",
              "postedAt": "2025-01-22"
            }
          ],
          "popularity": 93,
          "createdAt": "2025-01-06"
        }
      
];

export default products;