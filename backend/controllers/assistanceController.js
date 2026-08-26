const { AssistanceRequest } = require("../models");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.createAssistanceRequest = async (req, res) => {
  try {
    const request = await AssistanceRequest.create(req.body);

    const { service, firstName, lastName, phoneNumber, email, message } =
      req.body;

    const { error } = await resend.emails.send({
      from: "Right Pack Out Website <onboarding@resend.dev>",
      to: ["therightpackout@gmail.com"],
      subject: `New Website Request - ${firstName} ${lastName}`,
      html: `
        <h2>New Website Assistance Request</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phoneNumber || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not provided"}</p>

        <hr />

        <p><strong>Request Details:</strong></p>
        <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${message}</pre>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);
    }

    res.status(201).json({
      success: true,
      request,
      emailNotificationSent: !error,
    });
  } catch (err) {
    console.error("Assistance request error:", err);

    res.status(500).json({
      error: "Failed to create assistance request",
    });
  }
};
