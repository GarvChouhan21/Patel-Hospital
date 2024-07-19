import AsyncStorage from '@react-native-async-storage/async-storage';
export const setItems: any = async (myKey: string | undefined, info: any) => {
  try {
    await AsyncStorage.setItem(String(myKey), JSON.stringify(info));
  } catch (error) {
    // Handle error here
    console.error('Error setting item:', error);
  }
};

export const getItems: any = async (myKey: string | undefined) => {
  try {
    const item = await AsyncStorage.getItem(String(myKey));
    return item ? JSON.parse(item) : {};
  } catch (error) {
    // Handle error here
    console.error('Error getting item:', error);
    return null;
  }
};

export const removeItems = async (myKey: string) => {
  // Removed the explicit 'any' type
  try {
    await AsyncStorage.removeItem(String(myKey)); // Ensure myKey is converted to a string
  } catch (error) {
    // Handle error here
    console.error('Error removing item:', error);
  }
};

export const clearItems: any = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // Handle error here
    console.error('Error clearing items:', error);
  }
};

export const updateItems: any = async (
  myKey: string | undefined,
  updatedInfo: any,
) => {
  try {
    // Get current data
    const currentData = await getItems(String(myKey));
    let userData = currentData ? JSON.parse(currentData) : {};
    // Update the data
    userData = {...userData, ...updatedInfo};
    // Save updated data
    setItems(myKey, userData);
  } catch (error) {
    // Handle error here
    console.error('Error updating item:', error);
  }
};