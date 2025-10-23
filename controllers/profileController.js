import UserModel from "../model/userModel.js";


export const privateProfile = async (req, res) => {
  try {
    const userId = req.user?.id;

    const user = await UserModel.findOne(userId);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        data: null,
      });
    }
    return res.status(200).json({
      message: 'User Profile',
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};