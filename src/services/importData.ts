import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const mockData = [
  {
    "id": "1",
    "name": "TMA-HD Wireless",
    "category": "headsets",
    "price": "150.00",
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
      }
    ],
    "popularity": 85,
    "createdAt": "2024-12-25"
  },
  {
    "id": "2",
    "name": "TMA-2 Comfort Wireless",
    "category": "headphones",
    "price": "200.00",
    "details": "Over-ear headphones designed for ultimate comfort, featuring premium sound and long-lasting battery.",
    "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
    "reviews": [
      {
        "userId": "user201",
        "userName": "Alice Adams",
        "rating": 5,
        "comment": "Perfect for studio use, with crystal-clear audio.",
        "postedAt": "2025-01-07"
      }
    ],
    "popularity": 92,
    "createdAt": "2024-12-28"
  },
  {
    "id": "3",
    "name": "PulseBass 360",
    "category": "headsets",
    "price": "120.00",
    "details": "A gaming headset with immersive sound and a built-in microphone for crystal-clear communication.",
    "img": "https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/ef7e65e6c55b14894c569dd2948b130f.jpeg",
    "reviews": [
      {
        "userId": "user301",
        "userName": "Mike Wilson",
        "rating": 5,
        "comment": "Fantastic headset for gaming! The sound is incredibly immersive.",
        "postedAt": "2025-01-12"
      }
    ],
    "popularity": "78",
    "createdAt": "2024-12-30"
  }
];


export async function importDataToFirestore() {
  const productsCollection = collection(db, 'products');

  for (const product of mockData) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Produto ${product.id} adicionado com sucesso`);
    } catch (error) {
      console.error(`Erro ao adicionar produto ${product.id}:`, error);
    }
  }

  console.log('Importação de dados concluída');
}