import nodemailer from 'nodemailer';
import User from '@/model/userModel';
import bcryptjs from 'bcryptjs';

const transporter = nodemailer.createTransport({
	host: 'sandbox.smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: 'b4b48d00e84264',
		pass: 'd36707a9cece3e',
	},
});
// genarate the code for mailtrap
const sendEmail = async ({ email, password, userId, emailType }: any) => {
	try {
		bcryptjs.hash(userId.toString(), 10);
	} catch (error: any) {
		console.log(error.message);
	}
};
