import axios from "axios";

const WEB_HOOK_URL = process.env.WEB_HOOK_URL;

export const sendNotificationToTeams = async (content) => {
  try {
    const message = {
      text: `${content}`,
    };

    await axios.post(WEB_HOOK_URL, message);
    console.log("Notification sent to Teams:");
  } catch (error) {
    console.error("Error sending notification to Teams:", error);
  }
};
