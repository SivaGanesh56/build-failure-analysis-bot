import axios from "axios";

const webhookUrl =
  "https://sprinklr.webhook.office.com/webhookb2/040e9501-a73a-4d5e-bb77-77d7dcb25d6b@52bc7e22-6631-4c88-9c4f-9c115c186148/IncomingWebhook/d79c6b8e382a46b7b9283902c4462fa9/bdc51375-a1f5-4080-8944-6044aa01efe4/V2Jmp4h408ygc-SM69RzjPuO_ppcSfMVx5aK4MgAUwIAI1";

export const sendNotificationToTeams = async (content) => {
  try {
    const message = {
      text: `${content}`,
    };

    const response = await axios.post(webhookUrl, message);
    console.log("Notification sent to Teams:");
  } catch (error) {
    console.error("Error sending notification to Teams:", error);
  }
};
