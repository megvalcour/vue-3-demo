const getUsers = async () => {
    try {
      const userData = await fetch(`${import.meta.env.VITE_API_URL}/users/`);
      return await userData.json()
    } catch (error) {
      console.error("Error in getUsers:", error)
      throw error
    }
}

const getUserItems = async (userId, itemType = "todos") => {
  try {
    const userItems = await fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/${itemType}`);
    return await userItems.json()
  } catch (error) {
    console.error("Error in getUserItems:", error)
    throw error
  }
}

export { getUsers, getUserItems }