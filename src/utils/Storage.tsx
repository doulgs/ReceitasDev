import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  key: any;
  id: any;
  item: any;
  newItem: any;
  receipe: any;
};

export async function getFavorites({ key }: Props) {
  const favorites: any = await AsyncStorage.getItem(key);
  return JSON.parse(favorites) || [];
}

export async function saveFavorites({ key, newItem }: Props) {
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some((item: any) => item.id === newItem.id);

  if (hasItem) {
    console.log("Item já esta como favorit");
    return;
  }

  myFavorites.push(newItem);
  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  console.log("Item Salvo");
}

export async function removeItem({ id }: Props) {
  let receipes = await getFavorites("@appreceitas");

  let myFavorites = receipes.filter((item: any) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
  console.log("ITEM DELETADO");
  return myFavorites;
}

export async function isFavorites({ receipe }: Props) {
  let myReceipes = await getFavorites("@appreceitas");

  const favorites = myReceipes.find((item: any) => item.id === myReceipes.item);

  if (favorites) {
    return true;
  }
  return false;
}
