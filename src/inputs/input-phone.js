import InputBase from './input-base.js';
import { html } from 'lit';
import { MaskInput } from "maska";
import * as z from "zod";

const COUNTRIES = [
  { code: 'AF', dial: '+93', flag: '🇦🇫', name: 'Afghanistan', mask: '### ### ###', maxDigits: 9 },
  { code: 'AX', dial: '+358', flag: '🇦🇽', name: 'Åland Islands', mask: '### ### ## ###', maxDigits: 10 },
  { code: 'AL', dial: '+355', flag: '🇦🇱', name: 'Albania', mask: '### ### ###', maxDigits: 9 },
  { code: 'DZ', dial: '+213', flag: '🇩🇿', name: 'Algeria', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'AS', dial: '+1', flag: '🇦🇸', name: 'American Samoa', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'AD', dial: '+376', flag: '🇦🇩', name: 'Andorra', mask: '### ###', maxDigits: 6 },
  { code: 'AO', dial: '+244', flag: '🇦🇴', name: 'Angola', mask: '### ### ###', maxDigits: 9 },
  { code: 'AI', dial: '+1', flag: '🇦🇮', name: 'Anguilla', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'AG', dial: '+1', flag: '🇦🇬', name: 'Antigua and Barbuda', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'AR', dial: '+54', flag: '🇦🇷', name: 'Argentina', mask: '### ###-####', maxDigits: 10 },
  { code: 'AM', dial: '+374', flag: '🇦🇲', name: 'Armenia', mask: '## ### ###', maxDigits: 8 },
  { code: 'AW', dial: '+297', flag: '🇦🇼', name: 'Aruba', mask: '### ####', maxDigits: 7 },
  { code: 'AU', dial: '+61', flag: '🇦🇺', name: 'Australia', mask: '#### ## ####', maxDigits: 9 },
  { code: 'AT', dial: '+43', flag: '🇦🇹', name: 'Austria', mask: '### ### ###', maxDigits: 10 },
  { code: 'AZ', dial: '+994', flag: '🇦🇿', name: 'Azerbaijan', mask: '## ### ## ##', maxDigits: 9 },
  { code: 'BS', dial: '+1', flag: '🇧🇸', name: 'Bahamas', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'BH', dial: '+973', flag: '🇧🇭', name: 'Bahrain', mask: '### ## ###', maxDigits: 8 },
  { code: 'BD', dial: '+880', flag: '🇧🇩', name: 'Bangladesh', mask: '## ### ###', maxDigits: 8 },
  { code: 'BB', dial: '+1', flag: '🇧🇧', name: 'Barbados', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'BY', dial: '+375', flag: '🇧🇾', name: 'Belarus', mask: '## ### ## ##', maxDigits: 9 },
  { code: 'BE', dial: '+32', flag: '🇧🇪', name: 'Belgium', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'BZ', dial: '+501', flag: '🇧🇿', name: 'Belize', mask: '### ###', maxDigits: 7 },
  { code: 'BJ', dial: '+229', flag: '🇧🇯', name: 'Benin', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'BM', dial: '+1', flag: '🇧🇲', name: 'Bermuda', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'BT', dial: '+975', flag: '🇧🇹', name: 'Bhutan', mask: '# ### ###', maxDigits: 7 },
  { code: 'BO', dial: '+591', flag: '🇧🇴', name: 'Bolivia', mask: '### ### ###', maxDigits: 8 },
  { code: 'BA', dial: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina', mask: '### ### ###', maxDigits: 9 },
  { code: 'BW', dial: '+267', flag: '🇧🇼', name: 'Botswana', mask: '## ### ###', maxDigits: 8 },
  { code: 'BR', dial: '+55', flag: '🇧🇷', name: 'Brazil', mask: '(##) #####-####', maxDigits: 11 },
  { code: 'IO', dial: '+246', flag: '🇮🇴', name: 'British Indian Ocean Territory', mask: '### #####', maxDigits: 7 },
  { code: 'VG', dial: '+1', flag: '🇻🇬', name: 'British Virgin Islands', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'BN', dial: '+673', flag: '🇧🇳', name: 'Brunei', mask: '### ####', maxDigits: 7 },
  { code: 'BG', dial: '+359', flag: '🇧🇬', name: 'Bulgaria', mask: '### ### ###', maxDigits: 9 },
  { code: 'BF', dial: '+226', flag: '🇧🇫', name: 'Burkina Faso', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'BI', dial: '+257', flag: '🇧🇮', name: 'Burundi', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'KH', dial: '+855', flag: '🇰🇭', name: 'Cambodia', mask: '# ### ### ###', maxDigits: 9 },
  { code: 'CM', dial: '+237', flag: '🇨🇲', name: 'Cameroon', mask: '### ### ## ##', maxDigits: 9 },
  { code: 'CA', dial: '+1', flag: '🇨🇦', name: 'Canada', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'CV', dial: '+238', flag: '🇨🇻', name: 'Cape Verde', mask: '### ## ##', maxDigits: 7 },
  { code: 'KY', dial: '+1', flag: '🇰🇾', name: 'Cayman Islands', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'CF', dial: '+236', flag: '🇨🇫', name: 'Central African Republic', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'TD', dial: '+235', flag: '🇹🇩', name: 'Chad', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'CL', dial: '+56', flag: '🇨🇱', name: 'Chile', mask: '# #### ####', maxDigits: 9 },
  { code: 'CN', dial: '+86', flag: '🇨🇳', name: 'China', mask: '### #### ####', maxDigits: 11 },
  { code: 'CX', dial: '+61', flag: '🇨🇽', name: 'Christmas Island', mask: '#### ## ####', maxDigits: 9 },
  { code: 'CC', dial: '+61', flag: '🇨🇨', name: 'Cocos Islands', mask: '#### ## ####', maxDigits: 9 },
  { code: 'CO', dial: '+57', flag: '🇨🇴', name: 'Colombia', mask: '### #### ###', maxDigits: 10 },
  { code: 'KM', dial: '+269', flag: '🇰🇲', name: 'Comoros', mask: '### ## ##', maxDigits: 7 },
  { code: 'CK', dial: '+682', flag: '🇨🇰', name: 'Cook Islands', mask: '### ## ##', maxDigits: 7 },
  { code: 'CR', dial: '+506', flag: '🇨🇷', name: 'Costa Rica', mask: '#### ####', maxDigits: 8 },
  { code: 'HR', dial: '+385', flag: '🇭🇷', name: 'Croatia', mask: '### ### ###', maxDigits: 9 },
  { code: 'CU', dial: '+53', flag: '🇨🇺', name: 'Cuba', mask: '# ### ####', maxDigits: 8 },
  { code: 'CW', dial: '+599', flag: '🇨🇼', name: 'Curaçao', mask: '### ### ####', maxDigits: 10 },
  { code: 'CY', dial: '+357', flag: '🇨🇾', name: 'Cyprus', mask: '## ### ###', maxDigits: 8 },
  { code: 'CZ', dial: '+420', flag: '🇨🇿', name: 'Czech Republic', mask: '### ### ###', maxDigits: 9 },
  { code: 'CD', dial: '+243', flag: '🇨🇩', name: 'Democratic Republic of the Congo', mask: '### ### ###', maxDigits: 9 },
  { code: 'DK', dial: '+45', flag: '🇩🇰', name: 'Denmark', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'DJ', dial: '+253', flag: '🇩🇯', name: 'Djibouti', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'DM', dial: '+1', flag: '🇩🇲', name: 'Dominica', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'DO', dial: '+1', flag: '🇩🇴', name: 'Dominican Republic', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'EC', dial: '+593', flag: '🇪🇨', name: 'Ecuador', mask: '# ### ### ###', maxDigits: 10 },
  { code: 'EG', dial: '+20', flag: '🇪🇬', name: 'Egypt', mask: '### ### ####', maxDigits: 10 },
  { code: 'SV', dial: '+503', flag: '🇸🇻', name: 'El Salvador', mask: '### ####', maxDigits: 8 },
  { code: 'GQ', dial: '+240', flag: '🇬🇶', name: 'Equatorial Guinea', mask: '### ### ###', maxDigits: 9 },
  { code: 'ER', dial: '+291', flag: '🇪🇷', name: 'Eritrea', mask: '# ### ###', maxDigits: 7 },
  { code: 'EE', dial: '+372', flag: '🇪🇪', name: 'Estonia', mask: '### #### ##', maxDigits: 8 },
  { code: 'SZ', dial: '+268', flag: '🇸🇿', name: 'Eswatini', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'ET', dial: '+251', flag: '🇪🇹', name: 'Ethiopia', mask: '### ### ####', maxDigits: 10 },
  { code: 'FK', dial: '+500', flag: '🇫🇰', name: 'Falkland Islands', mask: '#####', maxDigits: 5 },
  { code: 'FO', dial: '+298', flag: '🇫🇴', name: 'Faroe Islands', mask: '### ###', maxDigits: 6 },
  { code: 'FJ', dial: '+679', flag: '🇫🇯', name: 'Fiji', mask: '### ####', maxDigits: 7 },
  { code: 'FI', dial: '+358', flag: '🇫🇮', name: 'Finland', mask: '### ### ## ##', maxDigits: 10 },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'France', mask: '# ## ## ## ##', maxDigits: 9 },
  { code: 'GF', dial: '+594', flag: '🇬🇫', name: 'French Guiana', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'PF', dial: '+689', flag: '🇵🇫', name: 'French Polynesia', mask: '## ## ## ##', maxDigits: 8 },
  { code: 'GA', dial: '+241', flag: '🇬🇦', name: 'Gabon', mask: '# ## ## ##', maxDigits: 7 },
  { code: 'GM', dial: '+220', flag: '🇬🇲', name: 'Gambia', mask: '### ####', maxDigits: 7 },
  { code: 'GE', dial: '+995', flag: '🇬🇪', name: 'Georgia', mask: '### ### ###', maxDigits: 9 },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Germany', mask: '### ### ####', maxDigits: 11 },
  { code: 'GH', dial: '+233', flag: '🇬🇭', name: 'Ghana', mask: '### ### ####', maxDigits: 9 },
  { code: 'GI', dial: '+350', flag: '🇬🇮', name: 'Gibraltar', mask: '### #######', maxDigits: 8 },
  { code: 'GR', dial: '+30', flag: '🇬🇷', name: 'Greece', mask: '### ### ####', maxDigits: 10 },
  { code: 'GL', dial: '+299', flag: '🇬🇱', name: 'Greenland', mask: '## ## ##', maxDigits: 6 },
  { code: 'GD', dial: '+1', flag: '🇬🇩', name: 'Grenada', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'GP', dial: '+590', flag: '🇬🇵', name: 'Guadeloupe', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'GU', dial: '+1', flag: '🇬🇺', name: 'Guam', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'GT', dial: '+502', flag: '🇬🇹', name: 'Guatemala', mask: '### ## ## ##', maxDigits: 8 },
  { code: 'GG', dial: '+44', flag: '🇬🇬', name: 'Guernsey', mask: '### ### ####', maxDigits: 10 },
  { code: 'GN', dial: '+224', flag: '🇬🇳', name: 'Guinea', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'GW', dial: '+245', flag: '🇬🇼', name: 'Guinea-Bissau', mask: '# ### ###', maxDigits: 7 },
  { code: 'GY', dial: '+592', flag: '🇬🇾', name: 'Guyana', mask: '### ####', maxDigits: 7 },
  { code: 'HT', dial: '+509', flag: '🇭🇹', name: 'Haiti', mask: '### ## ## ##', maxDigits: 8 },
  { code: 'HN', dial: '+504', flag: '🇭🇳', name: 'Honduras', mask: '#### ####', maxDigits: 8 },
  { code: 'HK', dial: '+852', flag: '🇭🇰', name: 'Hong Kong', mask: '#### ####', maxDigits: 8 },
  { code: 'HU', dial: '+36', flag: '🇭🇺', name: 'Hungary', mask: '## ### ####', maxDigits: 9 },
  { code: 'IS', dial: '+354', flag: '🇮🇸', name: 'Iceland', mask: '### ####', maxDigits: 7 },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'India', mask: '#### #####', maxDigits: 10 },
  { code: 'ID', dial: '+62', flag: '🇮🇩', name: 'Indonesia', mask: '###-####-####', maxDigits: 11 },
  { code: 'IR', dial: '+98', flag: '🇮🇷', name: 'Iran', mask: '### ### ####', maxDigits: 10 },
  { code: 'IQ', dial: '+964', flag: '🇮🇶', name: 'Iraq', mask: '### ### ####', maxDigits: 10 },
  { code: 'IE', dial: '+353', flag: '🇮🇪', name: 'Ireland', mask: '### ### ###', maxDigits: 9 },
  { code: 'IM', dial: '+44', flag: '🇮🇲', name: 'Isle of Man', mask: '### ### ####', maxDigits: 10 },
  { code: 'IL', dial: '+972', flag: '🇮🇱', name: 'Israel', mask: '##-###-####', maxDigits: 9 },
  { code: 'IT', dial: '+39', flag: '🇮🇹', name: 'Italy', mask: '### ######', maxDigits: 10 },
  { code: 'CI', dial: '+225', flag: '🇨🇮', name: 'Ivory Coast', mask: '#### ## ##', maxDigits: 8 },
  { code: 'JM', dial: '+1', flag: '🇯🇲', name: 'Jamaica', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japan', mask: '0###-####', maxDigits: 8 },
  { code: 'JE', dial: '+44', flag: '🇯🇪', name: 'Jersey', mask: '### ### ####', maxDigits: 10 },
  { code: 'JO', dial: '+962', flag: '🇯🇴', name: 'Jordan', mask: '## ### ####', maxDigits: 9 },
  { code: 'KZ', dial: '+7', flag: '🇰🇿', name: 'Kazakhstan', mask: '### ###-##-##', maxDigits: 10 },
  { code: 'KE', dial: '+254', flag: '🇰🇪', name: 'Kenya', mask: '### ######', maxDigits: 9 },
  { code: 'KI', dial: '+686', flag: '🇰🇮', name: 'Kiribati', mask: '#### ####', maxDigits: 8 },
  { code: 'KP', dial: '+850', flag: '🇰🇵', name: 'North Korea', mask: '### ###', maxDigits: 6 },
  { code: 'KR', dial: '+82', flag: '🇰🇷', name: 'South Korea', mask: '010-####-####', maxDigits: 11 },
  { code: 'KW', dial: '+965', flag: '🇰🇼', name: 'Kuwait', mask: '### ### ##', maxDigits: 8 },
  { code: 'KG', dial: '+996', flag: '🇰🇬', name: 'Kyrgyzstan', mask: '### ### ###', maxDigits: 9 },
  { code: 'LA', dial: '+856', flag: '🇱🇦', name: 'Laos', mask: '# ### ### ###', maxDigits: 10 },
  { code: 'LV', dial: '+371', flag: '🇱🇻', name: 'Latvia', mask: '## ### ###', maxDigits: 8 },
  { code: 'LB', dial: '+961', flag: '🇱🇧', name: 'Lebanon', mask: '### ### ###', maxDigits: 8 },
  { code: 'LS', dial: '+266', flag: '🇱🇸', name: 'Lesotho', mask: '### ## ## ##', maxDigits: 8 },
  { code: 'LR', dial: '+231', flag: '🇱🇷', name: 'Liberia', mask: '### ### ###', maxDigits: 9 },
  { code: 'LY', dial: '+218', flag: '🇱🇾', name: 'Libya', mask: '### ### ###', maxDigits: 10 },
  { code: 'LI', dial: '+423', flag: '🇱🇮', name: 'Liechtenstein', mask: '### ### ###', maxDigits: 7 },
  { code: 'LT', dial: '+370', flag: '🇱🇹', name: 'Lithuania', mask: '# ## ### ##', maxDigits: 8 },
  { code: 'LU', dial: '+352', flag: '🇱🇺', name: 'Luxembourg', mask: '### ### ###', maxDigits: 9 },
  { code: 'MO', dial: '+853', flag: '🇲🇴', name: 'Macau', mask: '#### ####', maxDigits: 8 },
  { code: 'MG', dial: '+261', flag: '🇲🇬', name: 'Madagascar', mask: '### ## ### ##', maxDigits: 10 },
  { code: 'MW', dial: '+265', flag: '🇲🇼', name: 'Malawi', mask: '# ### ### ###', maxDigits: 9 },
  { code: 'MY', dial: '+60', flag: '🇲🇾', name: 'Malaysia', mask: '##-### ####', maxDigits: 10 },
  { code: 'MV', dial: '+960', flag: '🇲🇻', name: 'Maldives', mask: '### ####', maxDigits: 7 },
  { code: 'ML', dial: '+223', flag: '🇲🇱', name: 'Mali', mask: '### ## ## ##', maxDigits: 8 },
  { code: 'MT', dial: '+356', flag: '🇲🇹', name: 'Malta', mask: '#### ####', maxDigits: 8 },
  { code: 'MH', dial: '+692', flag: '🇲🇭', name: 'Marshall Islands', mask: '### ###', maxDigits: 7 },
  { code: 'MQ', dial: '+596', flag: '🇲🇶', name: 'Martinique', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'MR', dial: '+222', flag: '🇲🇷', name: 'Mauritania', mask: '### ## ## ##', maxDigits: 8 },
  { code: 'MU', dial: '+230', flag: '🇲🇺', name: 'Mauritius', mask: '# ### ####', maxDigits: 8 },
  { code: 'YT', dial: '+262', flag: '🇾🇹', name: 'Mayotte', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'MX', dial: '+52', flag: '🇲🇽', name: 'Mexico', mask: '### ### ####', maxDigits: 10 },
  { code: 'FM', dial: '+691', flag: '🇫🇲', name: 'Micronesia', mask: '### ####', maxDigits: 7 },
  { code: 'MD', dial: '+373', flag: '🇲🇩', name: 'Moldova', mask: '### ## ##', maxDigits: 8 },
  { code: 'MC', dial: '+377', flag: '🇲🇨', name: 'Monaco', mask: '### ### ###', maxDigits: 9 },
  { code: 'MN', dial: '+976', flag: '🇲🇳', name: 'Mongolia', mask: '## ### ## ##', maxDigits: 8 },
  { code: 'ME', dial: '+382', flag: '🇲🇪', name: 'Montenegro', mask: '### ### ###', maxDigits: 8 },
  { code: 'MS', dial: '+1', flag: '🇲🇸', name: 'Montserrat', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'MA', dial: '+212', flag: '🇲🇦', name: 'Morocco', mask: '### ### ###', maxDigits: 9 },
  { code: 'MZ', dial: '+258', flag: '🇲🇿', name: 'Mozambique', mask: '## ### ###', maxDigits: 9 },
  { code: 'MM', dial: '+95', flag: '🇲🇲', name: 'Myanmar', mask: '### ### ###', maxDigits: 9 },
  { code: 'NA', dial: '+264', flag: '🇳🇦', name: 'Namibia', mask: '# ## ### ###', maxDigits: 9 },
  { code: 'NR', dial: '+674', flag: '🇳🇷', name: 'Nauru', mask: '### ####', maxDigits: 7 },
  { code: 'NP', dial: '+977', flag: '🇳🇵', name: 'Nepal', mask: '### ### ###', maxDigits: 10 },
  { code: 'NL', dial: '+31', flag: '🇳🇱', name: 'Netherlands', mask: '## ########', maxDigits: 9 },
  { code: 'NC', dial: '+687', flag: '🇳🇨', name: 'New Caledonia', mask: '### ### ###', maxDigits: 6 },
  { code: 'NZ', dial: '+64', flag: '🇳🇿', name: 'New Zealand', mask: '### ### ####', maxDigits: 10 },
  { code: 'NI', dial: '+505', flag: '🇳🇮', name: 'Nicaragua', mask: '#### ####', maxDigits: 8 },
  { code: 'NE', dial: '+227', flag: '🇳🇪', name: 'Niger', mask: '### ## ## ##', maxDigits: 8 },
  { code: 'NG', dial: '+234', flag: '🇳🇬', name: 'Nigeria', mask: '### ### ####', maxDigits: 10 },
  { code: 'NU', dial: '+683', flag: '🇳🇺', name: 'Niue', mask: '####', maxDigits: 4 },
  { code: 'NF', dial: '+672', flag: '🇳🇫', name: 'Norfolk Island', mask: '### ## ##', maxDigits: 6 },
  { code: 'MK', dial: '+389', flag: '🇲🇰', name: 'North Macedonia', mask: '### ### ###', maxDigits: 8 },
  { code: 'MP', dial: '+1', flag: '🇲🇵', name: 'Northern Mariana Islands', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'NO', dial: '+47', flag: '🇳🇴', name: 'Norway', mask: '### ## ###', maxDigits: 8 },
  { code: 'OM', dial: '+968', flag: '🇴🇲', name: 'Oman', mask: '## ### ###', maxDigits: 8 },
  { code: 'PK', dial: '+92', flag: '🇵🇰', name: 'Pakistan', mask: '### #######', maxDigits: 10 },
  { code: 'PW', dial: '+680', flag: '🇵🇼', name: 'Palau', mask: '### ####', maxDigits: 7 },
  { code: 'PS', dial: '+970', flag: '🇵🇸', name: 'Palestine', mask: '## ### ####', maxDigits: 9 },
  { code: 'PA', dial: '+507', flag: '🇵🇦', name: 'Panama', mask: '### ####', maxDigits: 7 },
  { code: 'PG', dial: '+675', flag: '🇵🇬', name: 'Papua New Guinea', mask: '### ####', maxDigits: 8 },
  { code: 'PY', dial: '+595', flag: '🇵🇾', name: 'Paraguay', mask: '### ### ###', maxDigits: 9 },
  { code: 'PE', dial: '+51', flag: '🇵🇪', name: 'Peru', mask: '### ### ###', maxDigits: 9 },
  { code: 'PH', dial: '+63', flag: '🇵🇭', name: 'Philippines', mask: '### #### ###', maxDigits: 10 },
  { code: 'PN', dial: '+64', flag: '🇵🇳', name: 'Pitcairn', mask: '### ### ####', maxDigits: 10 },
  { code: 'PL', dial: '+48', flag: '🇵🇱', name: 'Poland', mask: '### ### ###', maxDigits: 9 },
  { code: 'PT', dial: '+351', flag: '🇵🇹', name: 'Portugal', mask: '### ### ###', maxDigits: 9 },
  { code: 'PR', dial: '+1', flag: '🇵🇷', name: 'Puerto Rico', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'QA', dial: '+974', flag: '🇶🇦', name: 'Qatar', mask: '### ####', maxDigits: 8 },
  { code: 'CG', dial: '+242', flag: '🇨🇬', name: 'Republic of the Congo', mask: '# ## ### ###', maxDigits: 7 },
  { code: 'RO', dial: '+40', flag: '🇷🇴', name: 'Romania', mask: '### ### ###', maxDigits: 9 },
  { code: 'RU', dial: '+7', flag: '🇷🇺', name: 'Russia', mask: '### ###-##-##', maxDigits: 10 },
  { code: 'RW', dial: '+250', flag: '🇷🇼', name: 'Rwanda', mask: '### ### ###', maxDigits: 9 },
  { code: 'BL', dial: '+590', flag: '🇧🇱', name: 'Saint Barthélemy', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'SH', dial: '+290', flag: '🇸🇭', name: 'Saint Helena', mask: '####', maxDigits: 4 },
  { code: 'KN', dial: '+1', flag: '🇰🇳', name: 'Saint Kitts and Nevis', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'LC', dial: '+1', flag: '🇱🇨', name: 'Saint Lucia', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'MF', dial: '+590', flag: '🇲🇫', name: 'Saint Martin', mask: '### ## ## ##', maxDigits: 9 },
  { code: 'PM', dial: '+508', flag: '🇵🇲', name: 'Saint Pierre and Miquelon', mask: '### ## ##', maxDigits: 6 },
  { code: 'VC', dial: '+1', flag: '🇻🇨', name: 'Saint Vincent and the Grenadines', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'WS', dial: '+685', flag: '🇼🇸', name: 'Samoa', mask: '#####', maxDigits: 5 },
  { code: 'SM', dial: '+378', flag: '🇸🇲', name: 'San Marino', mask: '### ## ## ##', maxDigits: 10 },
  { code: 'ST', dial: '+239', flag: '🇸🇹', name: 'São Tomé and Príncipe', mask: '### ####', maxDigits: 7 },
  { code: 'SA', dial: '+966', flag: '🇸🇦', name: 'Saudi Arabia', mask: '## ### ####', maxDigits: 9 },
  { code: 'SN', dial: '+221', flag: '🇸🇳', name: 'Senegal', mask: '## ### ## ##', maxDigits: 9 },
  { code: 'RS', dial: '+381', flag: '🇷🇸', name: 'Serbia', mask: '### ### ###', maxDigits: 9 },
  { code: 'SC', dial: '+248', flag: '🇸🇨', name: 'Seychelles', mask: '# ### ###', maxDigits: 7 },
  { code: 'SL', dial: '+232', flag: '🇸🇱', name: 'Sierra Leone', mask: '### ######', maxDigits: 8 },
  { code: 'SG', dial: '+65', flag: '🇸🇬', name: 'Singapore', mask: '#### ####', maxDigits: 8 },
  { code: 'SX', dial: '+1', flag: '🇸🇽', name: 'Sint Maarten', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'SK', dial: '+421', flag: '🇸🇰', name: 'Slovakia', mask: '### ### ###', maxDigits: 9 },
  { code: 'SI', dial: '+386', flag: '🇸🇮', name: 'Slovenia', mask: '### ### ###', maxDigits: 8 },
  { code: 'SB', dial: '+677', flag: '🇸🇧', name: 'Solomon Islands', mask: '### ## ##', maxDigits: 7 },
  { code: 'SO', dial: '+252', flag: '🇸🇴', name: 'Somalia', mask: '## ### ###', maxDigits: 7 },
  { code: 'ZA', dial: '+27', flag: '🇿🇦', name: 'South Africa', mask: '## ### ####', maxDigits: 9 },
  { code: 'GS', dial: '+500', flag: '🇬🇸', name: 'South Georgia', mask: '#####', maxDigits: 5 },
  { code: 'SS', dial: '+211', flag: '🇸🇸', name: 'South Sudan', mask: '### ### ###', maxDigits: 9 },
  { code: 'ES', dial: '+34', flag: '🇪🇸', name: 'Spain', mask: '### ### ###', maxDigits: 9 },
  { code: 'LK', dial: '+94', flag: '🇱🇰', name: 'Sri Lanka', mask: '## ### ####', maxDigits: 9 },
  { code: 'SD', dial: '+249', flag: '🇸🇩', name: 'Sudan', mask: '### ### ####', maxDigits: 9 },
  { code: 'SR', dial: '+597', flag: '🇸🇷', name: 'Suriname', mask: '### ####', maxDigits: 7 },
  { code: 'SJ', dial: '+47', flag: '🇸🇯', name: 'Svalbard and Jan Mayen', mask: '### ## ###', maxDigits: 8 },
  { code: 'SE', dial: '+46', flag: '🇸🇪', name: 'Sweden', mask: '###-## ## ##', maxDigits: 10 },
  { code: 'CH', dial: '+41', flag: '🇨🇭', name: 'Switzerland', mask: '## ### ## ##', maxDigits: 9 },
  { code: 'SY', dial: '+963', flag: '🇸🇾', name: 'Syria', mask: '### ### ####', maxDigits: 9 },
  { code: 'TW', dial: '+886', flag: '🇹🇼', name: 'Taiwan', mask: '# ### ## ###', maxDigits: 9 },
  { code: 'TJ', dial: '+992', flag: '🇹🇯', name: 'Tajikistan', mask: '### ### ###', maxDigits: 9 },
  { code: 'TZ', dial: '+255', flag: '🇹🇿', name: 'Tanzania', mask: '### ### ###', maxDigits: 9 },
  { code: 'TH', dial: '+66', flag: '🇹🇭', name: 'Thailand', mask: '# ### ### ###', maxDigits: 9 },
  { code: 'TL', dial: '+670', flag: '🇹🇱', name: 'Timor-Leste', mask: '### ####', maxDigits: 8 },
  { code: 'TG', dial: '+228', flag: '🇹🇬', name: 'Togo', mask: '# # ## ## ##', maxDigits: 8 },
  { code: 'TK', dial: '+690', flag: '🇹🇰', name: 'Tokelau', mask: '####', maxDigits: 4 },
  { code: 'TO', dial: '+676', flag: '🇹🇴', name: 'Tonga', mask: '####', maxDigits: 5 },
  { code: 'TT', dial: '+1', flag: '🇹🇹', name: 'Trinidad and Tobago', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'TN', dial: '+216', flag: '🇹🇳', name: 'Tunisia', mask: '## ### ###', maxDigits: 8 },
  { code: 'TR', dial: '+90', flag: '🇹🇷', name: 'Turkey', mask: '### ### ## ##', maxDigits: 10 },
  { code: 'TM', dial: '+993', flag: '🇹🇲', name: 'Turkmenistan', mask: '# #### ####', maxDigits: 8 },
  { code: 'TC', dial: '+1', flag: '🇹🇨', name: 'Turks and Caicos Islands', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'TV', dial: '+688', flag: '🇹🇻', name: 'Tuvalu', mask: '### ####', maxDigits: 8 },
  { code: 'VI', dial: '+1', flag: '🇻🇮', name: 'U.S. Virgin Islands', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'UG', dial: '+256', flag: '🇺🇬', name: 'Uganda', mask: '### ### ###', maxDigits: 9 },
  { code: 'UA', dial: '+380', flag: '🇺🇦', name: 'Ukraine', mask: '## ### ## ##', maxDigits: 9 },
  { code: 'AE', dial: '+971', flag: '🇦🇪', name: 'United Arab Emirates', mask: '## ### ####', maxDigits: 9 },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'United Kingdom', mask: '0## ######', maxDigits: 10 },
  { code: 'US', dial: '+1', flag: '🇺🇸', name: 'United States', mask: '(###) ###-####', maxDigits: 10 },
  { code: 'UY', dial: '+598', flag: '🇺🇾', name: 'Uruguay', mask: '# ### ## ##', maxDigits: 8 },
  { code: 'UZ', dial: '+998', flag: '🇺🇿', name: 'Uzbekistan', mask: '## ### ## ##', maxDigits: 9 },
  { code: 'VU', dial: '+678', flag: '🇻🇺', name: 'Vanuatu', mask: '### ## ##', maxDigits: 7 },
  { code: 'VA', dial: '+39', flag: '🇻🇦', name: 'Vatican City', mask: '### ######', maxDigits: 10 },
  { code: 'VE', dial: '+58', flag: '🇻🇪', name: 'Venezuela', mask: '### ## ## ##', maxDigits: 10 },
  { code: 'VN', dial: '+84', flag: '🇻🇳', name: 'Vietnam', mask: '## #### ####', maxDigits: 10 },
  { code: 'WF', dial: '+681', flag: '🇼🇫', name: 'Wallis and Futuna', mask: '### ## ##', maxDigits: 6 },
  { code: 'EH', dial: '+212', flag: '🇪🇭', name: 'Western Sahara', mask: '### ### ###', maxDigits: 9 },
  { code: 'YE', dial: '+967', flag: '🇾🇪', name: 'Yemen', mask: '# ### ###', maxDigits: 9 },
  { code: 'ZM', dial: '+260', flag: '🇿🇲', name: 'Zambia', mask: '## ### ####', maxDigits: 9 },
  { code: 'ZW', dial: '+263', flag: '🇿🇼', name: 'Zimbabwe', mask: '## ### ###', maxDigits: 9 },
];

export default class InputPhone extends InputBase {
  static formAssociated = true;

  static properties = {
    // generic (inherited) + phone‑specific props
    country: { type: String },
    dialCode: { type: String },
    mask: { type: String },
    maxDigits: { type: Number },
    localDigits: { type: String },

    requiredMessage: { type: String, attribute: 'required-message' },
  };

  constructor() {
    super();
    this.countries = COUNTRIES;
    this.country = 'US';
    this.dialCode = '+1';
    this.mask = '(###) ###-####';
    this.maxDigits = 10;
    this.localDigits = '';
    this._maskInstance = null;
  }

  // -----------------------------------------------------------------
  // Render – exact DOM structure required by the spec
  // -----------------------------------------------------------------
  render() {
    const describedBy = [
      this.description ? this.ids.desc : null,
      this.error ? this.ids.error : null,
    ].filter(Boolean).join(' ') || null;

    const inputCls = ['i-input'];
    if (!this.valid) inputCls.push('i-input-error');

    return html`
      <div class="i-field ${this.inline ? 'i-inline' : ''}">
        <label class="i-label" id="${this.ids.label}" for="${this.ids.input}">
          ${this.label}
        </label>

        <div class="i-wrapper i-phone-wrapper">
          <select
            name="${this.name}-code"
            id="${this.ids.country}"
            class="i-select i-select-country"
            @change="${this._onCountryChange}"
            aria-label="Select country and calling code"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
          >
            ${this.countries.map(c => html`
              <option
                value="${c.code}"
                ?selected="${c.code === this.country}"
              >${c.name} (${c.dial})</option>
            `)}
          </select>

          <input
            id="${this.ids.input}"
            class="${inputCls.join(' ')}"
            type="tel"
            placeholder="${this.placeholder}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-labelledby="${this.ids.label}"
            aria-describedby="${describedBy}"
            aria-invalid="${!this.valid}"
            data-maska="${this.mask}"
            data-maska-mask="${this.mask}"
            @input="${this._onInput}"
            @change="${this._onChange}"
            @blur="${this._onBlur}"
          />
        </div>

        ${this._renderDescription()}
        ${this._renderError()}
      </div>
    `;
  }

  _renderDescription() {
    if (!this.description) return '';
    return html`<p class="i-description" id="${this.ids.desc}">${this.description || ''}</p>`;
  }

  _renderError() {
    if (!this.error) return '';
    const error = JSON.parse(this.error);
    if (error.length < 2) {
      return html`<p class="i-error ${error ? 'i-error-visible' : ''}" id="${this.ids.error}">${error[0].message || ''}</p>`;
    } else {
      const errorList = html`<ul>${error.map(err => html`<li>${err.message}</li>`)}</ul>`;
      return html`<div class="i-error ${error ? 'i-error-visible' : ''}" id="${this.ids.error}">${errorList}</div>`;
    }
  }

  // -----------------------------------------------------------------
  // Lifecycle – create maska instance and hook up events
  // -----------------------------------------------------------------
  firstUpdated() {
    // Create maska once the DOM is rendered
    const phoneInput = this.renderRoot?.querySelector('.i-input');
    if (phoneInput) {
      this._maskInstance = new MaskInput(phoneInput, { mask: this.mask });
    }
  }

  // -----------------------------------------------------------------
  // Country change – update attributes & re‑create the maska instance
  // -----------------------------------------------------------------
  _onCountryChange(e) {
    this.country = e.target.value;
    const c = this.countries.find(cc => cc.code === this.country);
    this.dialCode = c.dial;
    this.mask = c.mask;
    this.maxDigits = c.maxDigits;

    const phoneInput = this.renderRoot?.querySelector('.i-input');

    if (phoneInput) {
      // Destroy previous instance (maska supports this)
      if (this._maskInstance) this._maskInstance.destroy();

      // Re‑create with the new mask
      this._maskInstance = new MaskInput(phoneInput, { mask: this.mask });

      // Reflect attributes – this makes maska re‑read the mask patterns
      phoneInput.setAttribute('data-maska', this.mask);
      phoneInput.setAttribute('data-maska-mask', this.mask);
    }

    this._updateFormattedValue();
    this._updateValue();   // updates form value + fires input:input event
  }

  // -----------------------------------------------------------------
  // Input handling – now very small thanks to maska
  // -----------------------------------------------------------------
  //

  _onInput(e) {
    this._updateValue(e.target.value);     // → dispatches input:input + optional debounce
    this._callHook('onInput', e);
  }

  _onChange(e) {
    this._handleChange();                  // → dispatches input:change + optional validate
    this._callHook('onChange', e);
  }

  _onBlur(e) {
    this._handleBlur();                    // → optional validate on blur
    this._callHook('onBlur', e);
  }

  // -----------------------------------------------------------------
  // Helper: recompute the formatted representation
  // -----------------------------------------------------------------
  _updateFormattedValue() {
    // maska already shows the formatted value; we only need the raw value for the form
    this.formattedValue = this._maskInstance?.maskedValue ?? this._applyMask(this.localDigits, this.mask);
  }

  // Fallback simple mask – kept for safety
  _applyMask(digits, mask) {
    let out = '';
    let i = 0;
    for (const ch of mask) {
      if ((ch === '#' || ch === '0') && i < digits.length) out += digits[i++];
      else out += ch;
    }
    return out;
  }

  // -----------------------------------------------------------------
  // Validation – unchanged, still uses Zod‑mini (same as before)
  // -----------------------------------------------------------------
  async validate(options = {}) {

    try {
      const schema = this._buildSchema();
      const result = schema.safeParse(this.value);
      this.valid = result.success;
      this.error = result.success ? null : (result.error?.issues?.[0]?.message ?? 'Invalid phone number');

      if (this.valid) {
        this.internals.setValidity({});
        // this.internals.setValidationMessage('');
      } else {
        this.internals.setValidity({ customError: true });
        // this.internals.setValidationMessage(this.error);
      }

      this._dispatch('input:validate', { valid: this.valid, error: this.error });
      if (this.valid) {
        this._dispatch('input:success');
      } else {
        this._dispatch('input:error', { error: this.error });
      }
      this.requestUpdate();
      return { valid: this.valid, error: this.error };
    } catch (e) {
      // this._handleError(e);
      return { valid: false, error: this.error };
    }
  }

  _buildSchema() {
    let schema = z.string();

    if (this.required) {
      schema = schema.min(1, this.requiredMessage || (this.label ? `${this.label} is required` : 'This field is required'));
    }

    if (this.maxDigits) {
      schema = schema.regex(new RegExp(`^${this.dialCode}\\d{${this.maxDigits}}$`), 'Invalid phone number');
    }

    if (this.minDigits) {
      schema = schema.min(this.minDigits, 'Phone number is too short');
    }

    if (this.maxDigits && this.minDigits) {
      schema = schema.max(this.maxDigits, 'Phone number is too long');
    }

    return schema;
  }

  // -----------------------------------------------------------------
  // Public API – still inherited from InputBase
  // -----------------------------------------------------------------
  reset() {
    super.reset();
    // Reset phone‑specific state
    this.country = 'US';
    this.dialCode = '+1';
    this.mask = '(###) ###-####';
    this.maxDigits = 10;
    this.localDigits = '';
    this.formattedValue = '';
  }

  // Use the exact class name from the spec (i-input) instead of input-input
  focus() {
    this.renderRoot?.querySelector('.i-input')?.focus();
  }
}

customElements.define('input-phone', InputPhone);
