import AOS from 'aos';
import { activeHandler } from "./modules/tabs";
activeHandler();

AOS.init({
	offset: 300,
	once: true,
});