const fetch = require('node-fetch'); 
// import fetch from 'node-fetch';
const PDFDocument = require('pdfkit');

const fetchImage = async (src, text) => {
	try {
		
		const response = await fetch(src);
		const image = await response.buffer();
	  
		return image;
	} catch (error) {
		
		console.log({src, error, text})
		return 0
	}
  };

const generatePDF = async (req, res) => {
	try {

		console.log(req.body)
		const data = {
			name: 'ANKITA SHIVABASAPPA NOORSHETTER',
			phone_number: '+91 82177 77587 +91 99727 33006',
			email: 'ankitanoorashetter@gmail.com',
			adhar_no: '2345 6789 5678',
			bank_account_no: '12412341234',
			ifsc_code: '12345678',
			bank_name: 'canara bank',
			bank_branch: 'Hubli',
			micr_code: '1234561',
			admission_category: 'KEA GOVT',
			admission_order_no: '234523452',
			date_of_birth: '28-06-2004',
			gender: 'FEMALE',
			place_of_birth: 'LAKSHMESHWAR',
			taluk: 'SHIRAHARTTI',
			district: 'GADAG',
			state: 'KARNATAKA',
			nationality: 'INDIA',
			religion: 'HINDU',
			caste: 'General',
			subcaste: 'Arya Vyshya',
			caste_category: 'Vyshya',
			caste_certificate_rd: 'RD0039105399486',
			income_certificate_rd: 'RD0039105399486',
			ration_card: 'RY763849',
			father_name: 'shri virush',
			mother_name: 'shri virush',
			guardian_name: 'shri virush',
			permenant_address: 'asdfasdf asdfasfd asdf asdf asdf asd wersdfg sert cv sr wefvg ve4rty wef',
			corresponding_address: 'asdfasdf asdfasfd asdf asdf asdf asd wersdfg sert cv sr wefvg ve4rty wef',
			father_occupation: 'Doctor',
			father_income: '12344',
			father_aadhar_no: '123412341234',
			father_qualification: 'idontknow',
			father_contact_no: '23523452345235',
			mother_occupation: 'Home Maker',
			mother_income: '12344',
			mother_aadhar_no: '123412341234',
			mother_qualification: 'idontknow',
			mother_contact_no: '23523452345235',
			guardain_occupation: 'Software Engineer',
			guardain_income: '11',
			guardain_aadhar_no: 'guardian_aadhar',
			guardain_qualification: 'guardian_quali',
			guardain_contact_no: '23523452345235',
			sslc_registration_no: '12341234',
			sslc_month_year: '2023-2024',
			sslc_english: '12',
			sslc_hindi: '23',
			sslc_science: '50',
			sslc_maths: '60',
			sslc_social_science: '80',
			sslc_optional_subject: 'sanskrit',
			sslc_optional: '70',
			school_address: 'shri ----- shaale',
			puc_registration_number: '2345',
			puc_month_year: '2023-2024',
			puc_cet_number: '12341243',
			puc_cet_rank: '1234',
			puc_physics: '12',
			puc_chemistry: '23',
			puc_biology: '34',
			puc_maths: '23',
			puc_english: '34',
			puc_optional_subject: 'Kannada',
			puc_optional: '23',
			puc_college_address: 'qasdfasdfas asdf asdf asdf asdf asdf asdf asdf asdf d',
			height: '23',
			weight: '234',
			blood_group: 'AB+',
			physical_disability: 'emptyvaluephase',
			photo: '',
			signature: '',
			parent_signature: '',
			sslc_marks_card: '',
			puc_marks_card: '',
			income_certificate: '',
			caste_certificate: '',
			passbook: '',
			adhar: '',
			pancard: '',
			medical_certificate: '',
			transfer_certificate: ''
		};
	
		const { name="", phone_number="", email="", adhar_no="", bank_account_no="", ifsc_code="", bank_name="", bank_branch="", micr_code="", admission_category="", admission_order_no="",
			date_of_birth="", place_of_birth="", taluk="", district="", state="", gender="", nationality="", religion="", caste="",
			caste_category="", subcaste="", income_certificate_rd="", caste_certificate_rd="", ration_card = "",
			father_name="", mother_name="", guardian_name="", permenant_address="", corresponding_address="",
			father_occupation="", mother_occupation="", guardain_occupation="",
			father_income="", mother_income="", guardain_income="",
			father_aadhar_no="", mother_aadhar_no="", guardain_aadhar_no="",
			father_qualification="", mother_qualification="", guardain_qualification="",
			father_contact_no="", mother_contact_no="", guardain_contact_no="",
			height="", weight="", blood_group="", physical_disability="",
			sslc_registration_no="", school_address="", sslc_attempt = 1, sslc_month_year="",
			sslc_english="", sslc_hindi="", sslc_maths="", sslc_science="", sslc_social_science="", sslc_optional_subject="", sslc_optional="",
			sslc_english_max = 100, sslc_hindi_max = 100, sslc_maths_max = 100, sslc_science_max = 100, sslc_social_science_max = 100, sslc_optional_max = 100,
			puc_college_address="", puc_month_year="", puc_registration_number="", puc_attempt = 1,
			puc_english="", puc_biology="", puc_chemistry="", puc_maths="", puc_optional="", puc_optional_subject="", puc_physics="",
			puc_english_max = 100, puc_biology_max = 100, puc_chemistry_max = 100, puc_maths_max = 100, puc_optional_max = 100, puc_physics_max = 100,
			puc_cet_number="", puc_cet_rank="",
			photo="", signature="", parent_signature="", sslc_marks_card="", puc_marks_card="", income_certificate="", caste_certificate="", passbook="", adhar="", pancard="", medical_certificate = '', transfer_certificate=""
		} = req.body;
	
		const doc = new PDFDocument({ size: 'A4', margins: { top: 72, left: 50, bottom: 50, right: 72 } });
	
		doc.pipe(res)
	
		const addHeader = () => {
			doc
				.image('header.png', 20, 10, { width: 555 })
				.fillColor('#000')
				.font('Helvetica-Bold')
				.fontSize(15)
				.text('24         25', 395, 182)
				.underline(48, 182, 500, 23)
				.moveDown();
		}
	
		
		const addAdmissionDetails = async () => {
			const gap = 25;
			let lineY = parseInt(doc.y + 8) // 225;
			const x = 53;
			
			const addPhoto = async () => {
				const photoData = await fetchImage(photo, 'photo')
				if (photo && !(photoData === 0)) {
					doc.image(photoData, doc.page.width - 150, lineY, { width: 100 })
					return 1;
				} else {
					return 0
				}
			}
	
			const photoSet = await addPhoto();
	
			doc
				.fontSize(10)
				.fillColor('#444')
				.text('ADMISSION NO: _______________________________', x, lineY)
				.text('NAME', x, (lineY += gap)) /*.font('Helvetica-Bold') */.fillColor('#000').text(`: ${name.toUpperCase()}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('MOBILE NO', x, (lineY += gap)).font('Helvetica').fillColor('#000').text(`: ${phone_number}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('EMAIL ID', x, (lineY += gap)).font('Helvetica').fillColor('#000').text(`: ${email}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('ADHAR CARD NO', x, (lineY += gap)).font('Helvetica').fillColor('#000').text(`: ${adhar_no}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('SB A/C No', x, (lineY += gap)).font('Helvetica').fillColor('#000').text(`: ${bank_account_no}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('IFSC Code', x + 220, (lineY)).font('Helvetica').fillColor('#000').text(`: ${ifsc_code}`, x + 320, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('Bank Name', x, (lineY += gap)).font('Helvetica').fillColor('#000').text(`: ${bank_name}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('Branch', x + 220, (lineY)).font('Helvetica').fillColor('#000').text(`: ${bank_branch}`, x + 320, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('MICR Code', x, (lineY += gap)).font('Helvetica').fillColor('#000').text(`: ${micr_code}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('ADM. CATEGORY', x, (lineY += gap), { width: 100 }).font('Helvetica').fillColor('#000').text(`: ${admission_category}`, x + 120, lineY).fillColor('#444').font('Helvetica-Bold')
				.text('ORDER NO.', x + 220, (lineY)).font('Helvetica').fillColor('#000').text(`: ${admission_order_no}`, x + 320, lineY).fillColor('#444').font('Helvetica-Bold')
	
				// .font('Helvetica').fillColor('#444')
				.moveDown();
				return 1;
		}
	
		const addPersonalDetails = () => {
	
			const calculateAge = () => {
				try {
					const [date, month, year] = date_of_birth.split('-')
				const birthDate = new Date(`${month}-${date}-${year}`).getTime();
				const currentDate = new Date().getTime()
		
				const age = (currentDate - birthDate) / (1000 * 3600 * 24 * 365);
	
				return age
				} catch (error) {
					console.log(error)
					return 0;
				}
			}
	
			doc
				.underline(48, 450, 10, 23)
				.text('PERSONAL DETAILS', 64, 467)
				.rect(58, 460, 130, 22).lineWidth(2).stroke('#777')
				.underline(187, 450, 350, 23)
	
			// console.log({y : doc.y })
			const startY = doc.y + 20;
			const gap = 30;
			let currentY = startY + 10;
			doc
				.fontSize(10)
				.fillColor('#444').text('1. NAME OF THE STUDENT:  ', 53, currentY).fillColor('#000').text(name, 220, currentY)
				.fontSize(8).fillColor('#444').text('( As per SSLC marks card in CAPITAL LETTER ONLY )', 220, (currentY += 15)).fontSize(10)
	
				.fillColor('#444').text('2. DATE OF BIRTH', 53, (currentY += gap)).text(':', 160, (currentY)).fillColor('#000').text(date_of_birth, 180, (currentY))
				.fillColor('#444').text('AGE AS ON DATE', 305, (currentY)).text(':', 415, (currentY)).fillColor('#000').text(calculateAge().toFixed(), 425, (currentY))
	
				.fillColor('#444').text('3. PLACE OF BIRTH', 53, (currentY += gap)).text(':', 160, currentY).fillColor('#000').text(place_of_birth, 180, currentY)
				.fillColor('#444').text('TALUK', 305, currentY).text(':', 415, currentY).fillColor('#000').text(taluk, 425, currentY)
	
				.fillColor('#444').text('DISTRICT', 53, currentY += gap).text(':', 160, currentY).fillColor('#000').text(district, 180, currentY)
				.fillColor('#444').text('STATE', 305, currentY).text(':', 415, currentY).fillColor('#000').text(state, 425, currentY)
	
				.fillColor('#444').text('4. GENDER', 53, (currentY += gap)).text(':', 160, currentY).fillColor('#000').text(gender, 180, currentY)
				.fillColor('#444').text('5. NATIONALITY', 305, currentY).text(':', 415, currentY).fillColor('#000').text(nationality, 425, currentY)
	
				.fillColor('#444').text('6. RELIGION', 53, (currentY += gap)).text(':', 160, currentY).fillColor('#000').text(religion, 180, currentY)
				.fillColor('#444').text('7. CASTE', 305, currentY).text(':', 415, currentY).fillColor('#000').text(caste, 425, currentY)
	
				.fillColor('#444').text('8. CATEGORY', 53, (currentY += gap)).text(':', 160, currentY).fillColor('#000').text(caste_category, 180, currentY)
				.fillColor('#444').text('SUBCASTE', 305, currentY).text(':', 415, currentY).fillColor('#000').text(subcaste, 425, currentY)
	
				.fillColor('#444').text('9. INCOME CERTIFICATE', 53, (currentY += gap)).text(':', 160, currentY).fillColor('#000').text(income_certificate_rd, 180, currentY)
				.fillColor('#444').text('10. CASTE CERTIFICATE', 305, currentY).text(':', 415, currentY).fillColor('#000').text(caste_certificate_rd, 425, currentY)
				.fontSize(8).fillColor('#444').text('R.D No', 65, currentY += 10).text('R.D No', 322, currentY)
	
				.fontSize(11).fillColor('#444').text('11. RATION CARD  : (APL/BPL)', 53, (currentY += gap)).fillColor('#000').text(ration_card, 260, currentY)
			// 500 + (8 * 30) + 10
		}
	
		const addSSLCInformation = () => {
			let currentY = doc.y;
			const tableColumnWidth = 122;
			const tableColumnGap = 2;
			const tableMarginX = 38
			const outlineColor = '#f8f8f8';
			let currentX = tableMarginX;
	
			doc
				.fontSize(12)
				.underline(currentX, 10, 10, 23)
				.text('SSLC DETAILS', 64, 27)
				.rect(58, 20, 154, 22).lineWidth(2).stroke('#777')
				.underline(212, 10, 320, 23)
	
				.underline(currentX, 50, 490, 10, { color: '#aaa' })
	
				.fontSize(9).fillColor('#000').font('Helvetica')
				.text('Particulars', (currentX + 10), (currentY)).underline(currentX, currentY, 490, 15, { color: '#ccc' }).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text('SSLC ( Xth )', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Reg. No', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_registration_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Board University', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(school_address, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Attempt', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_attempt, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Month & Year of Passing', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_month_year, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Subject', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text('Max. Marks', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text('Obt. Marks', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text('Percentage ( % )', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('English', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_english_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(sslc_english, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((sslc_english * 100) / sslc_english_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Hindi', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_hindi_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(sslc_hindi, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((sslc_hindi * 100) / sslc_hindi_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Science', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_science_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(sslc_science, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((sslc_science * 100) / sslc_science_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Mathematics', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_maths_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(sslc_maths, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((sslc_maths * 100) / sslc_maths_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Social Science', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_social_science_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(sslc_social_science, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((sslc_social_science * 100) / sslc_social_science_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text(sslc_optional_subject, ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(sslc_optional_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(sslc_optional, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((sslc_optional * 100) / sslc_optional_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
		}
	
		const addPUCInformation = () => {
			let currentY = doc.y + 20;
			const tableColumnWidth = 122;
			const tableColumnGap = 2;
			const tableMarginX = 38
			const outlineColor = '#f8f8f8';
			let currentX = tableMarginX;
	
			doc
				.fontSize(12)
				.underline(currentX, currentY, 10, 23)
				.text('PUC DETAILS', 64, currentY + 15)
				.rect(58, currentY + 10, 154, 22).lineWidth(2).stroke('#777')
				.underline(212, currentY, 320, 23)
	
				.underline(currentX, currentY + 40, 490, 10, { color: '#aaa' })
	
			currentY += 60;
	
			doc
				.fontSize(9).fillColor('#000').font('Helvetica')
				.text('Particulars', (currentX + 10), (currentY)).underline(currentX, currentY, 490, 15, { color: '#ccc' }).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text('PUC ( XIIth )', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Reg. No', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_registration_number, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Board University', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_college_address, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Attempt', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_attempt, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Month & Year of Passing', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_month_year, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Subject', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text('Max. Marks', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text('Obt. Marks', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text('Percentage ( % )', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('English', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_english_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(puc_english, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_english * 100) / puc_english_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Biology', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_biology_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(puc_biology, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_biology * 100) / puc_biology_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Chemistry', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_chemistry_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(puc_chemistry, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_chemistry * 100) / puc_chemistry_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Mathematics', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_maths_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(puc_maths, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_maths * 100) / puc_maths_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('Physics', ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_physics_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(puc_physics, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_physics * 100) / puc_physics_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text(puc_optional_subject, ((currentX = tableMarginX) + 10), (currentY += 26)).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_optional_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text(puc_optional, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_optional * 100) / puc_optional_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
				.text('KEA Certificate No.', ((currentX = tableMarginX) + 10), (currentY += (36))).highlight(currentX, currentY - 10, 490, 24, { color: outlineColor })
				.text(puc_cet_number, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text('CET Rank', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
				.text((puc_cet_rank * 100) / puc_optional_max, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY)
	
		}
	
		const addGuardianDetails = () => {
			doc
				.underline(48, 10, 10, 23)
				.text('PARENT / GUARDIAN DETAILS', 64, 27)
				.rect(58, 20, 174, 22).lineWidth(2).stroke('#777')
				.underline(232, 10, 300, 23)
	
			const startY = doc.y + 20;
			const gap = 32;
			let currentY = startY + 10;
			const tableColumnWidth = 122;
			const tableColumnGap = 2;
			const tableMarginX = 38
			const outlineColor = '#f8f8f8';
			let currentX = tableMarginX;
	
			doc
				.fontSize(12)
				.fillColor('#444').text('11. NAME OF THE FATHER', 53, currentY).text(':', 220, (currentY)).fillColor('#000').text(father_name, 240, currentY)
				.fontSize(8).fillColor('#444').text('( As per SSLC marks card in CAPITAL LETTER ONLY )', 220, (currentY += 15)).fontSize(10)
	
				.fontSize(12)
				.fillColor('#444').text('12. NAME OF THE MOTHER', 53, (currentY += gap)).text(':', 220, (currentY)).fillColor('#000').text(mother_name, 240, (currentY))
				.fontSize(8).fillColor('#444').text('( As per SSLC marks card in CAPITAL LETTER ONLY )', 220, (currentY += 15)).fontSize(10)
	
				.fontSize(12)
				.fillColor('#444').text('12. NAME OF THE GUARDIAN', 53, (currentY += gap)).text(':', 220, (currentY)).fillColor('#000').text(guardian_name, 240, (currentY))
				.fontSize(8).fillColor('#444').text('( As per SSLC marks card in CAPITAL LETTER ONLY )', 220, (currentY += 15)).fontSize(10)
	
				.fontSize(12)
				.fillColor('#444').text('14. PERMANENT ADDRESS', 53, (currentY += gap)).text(':', 220, (currentY)).fillColor('#000').text(permenant_address, 240, (currentY))
				.fillColor('#444').text('15. CORRESPONDANCE ADDRESS', 53, (currentY += (2 * gap)), { width: 150 }).text(':', 220, (currentY)).fillColor('#000').text(corresponding_address, 240, (currentY))
	
				.fillColor('#555')
				.font('Helvetica')
	
				.text('SUBJECT', (currentX + 10), (currentY += (3 * gap))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text('FATHER', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text('MOTHER', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text('GUARDIAN', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
				.fontSize(8)
				.fillColor('#000')
				.text('OCCUPATION', ((currentX = tableMarginX) + 10), (currentY += (26))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(father_occupation, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(mother_occupation, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(guardain_occupation, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
				.text('Income ( Annual )', ((currentX = tableMarginX) + 10), (currentY += (26))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(`Rs. ${father_income} /-`, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(`Rs. ${mother_income} /-`, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(`Rs. ${guardain_income} /-`, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
				.text('Aadhar Number', ((currentX = tableMarginX) + 10), (currentY += (26))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(father_aadhar_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(mother_aadhar_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(guardain_aadhar_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
				.text('Qualification', ((currentX = tableMarginX) + 10), (currentY += (26))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(father_qualification, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(mother_qualification, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(guardain_qualification, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
				.text('Contact Number', ((currentX = tableMarginX) + 10), (currentY += (26))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(father_contact_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(mother_contact_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(guardain_contact_no, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
		}
	
		const addMedicalInformation = () => {
	
			const gap = 32;
			let currentY = doc.y + 40;
			const tableColumnWidth = 122;
			const tableColumnGap = 2;
			const tableMarginX = 38
			const outlineColor = '#f8f8f8';
			let currentX = tableMarginX;
	
			doc
				.fontSize(12).fillColor('#444').font('Helvetica-Bold')
				.text("MEDICAL INFORMATION OF THE CANDIDATE ( Medical certificate to be enclosed )", currentX, currentY)
	
				.fontSize(8).fillColor('#000').font('Helvetica')
				.text('Height', (currentX + 10), (currentY += gap)).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text('Weight', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text('Blood Group', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text('Physical Disablity if, any', (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#777' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
	
				.text(height, ((currentX = tableMarginX) + 10), (currentY += (26))).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(weight, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(blood_group, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
				.text(physical_disability, (10 + (currentX += (tableColumnWidth + tableColumnGap))), currentY).underline(currentX, currentY, tableColumnWidth, 15, { color: '#fff' }).highlight(currentX, currentY - 10, tableColumnWidth, 24, { color: outlineColor })
		}
	
		const studentDeclaration = 'I hereby declare that the particulars furnished by me are true and correct to the best of my knowledge and belief.I understand that my admission is provisional. Further, I hereby declare that I shall abide by the rules and regulations of the College made from time to time.'
		const parentDeclaration = 'I agree to my Son / Daughter admission to the 2023 - 2024 year Basic B.Sc. Nursing degree course and shall be responsible for the payment of all his / her fees and charges. I hereby undertake to follow the rules and regulation existing at present and to be informed from time to time.'
	
		const addAcknowledgement = async () => {
			let currentY = doc.y + 30;
			const tableMarginX = 38;
			let currentX = tableMarginX;
	
			const signatureImage = await fetchImage(signature, 'signature');
			const parentSignature = await fetchImage(parent_signature, 'parent_signature');
	
			doc
				.fontSize(12)
				.font('Helvetica-Bold')
				.text('Student Declaration : ', currentX, currentY, { continued: true })
				.font('Helvetica')
				.fontSize(10)
				.text(studentDeclaration)
	
				.fontSize(12)
				.font('Helvetica-Bold')
				.text('Parent Declaration : ', currentX, currentY += 40, { continued: true })
				.font('Helvetica')
				.fontSize(10)
				.text(parentDeclaration)
				
				.text('Student Signature', currentX, currentY += 60)
				.text('Parent Signature', doc.page.width - 200, currentY);
	
				currentY += 15;
	
				if(signature && !(signatureImage === 0)){
					doc.image(signatureImage, currentX, currentY, { height : 40 })
				}
				if(parent_signature && !(parentSignature === 0)){
					doc.image(parentSignature, doc.page.width - 200, currentY, { height : 40 })
				}
	
				return 1;
	
		}
	
		const addImagesSection = async ({text = 'SSLC MARKS CARD', img = ''}) => {
			if(!img){
				return 0
			}
			const imgSource =  await fetchImage(img, text);
			if(imgSource === 0){
				return 0
			}
			doc.addPage()
			let currentY = doc.y + 20;
			const tableMarginX = 38
			let currentX = tableMarginX;
	
			doc
				.image('IMAGE.png', 20, 10, { width: doc.page.width })
	
				.fontSize(12)
				.underline(currentX, currentY, 18, 23)
				.text(text, 64, currentY + 15)
				.rect(57, currentY + 10, 154, 22).lineWidth(2).stroke('#777')
				.underline(212, currentY, 320, 23)
	
				.image(imgSource, 38, currentY + 60, { width: doc.page.width - 20 });
				return 1;
		}
	
		addHeader();
		const a = await addAdmissionDetails();
		addPersonalDetails();
		doc.addPage()
		addSSLCInformation();
		addPUCInformation();
		doc.addPage();
		addGuardianDetails();
		addMedicalInformation();
		const b = await addAcknowledgement();
	
		const images = [
			{ text: 'SSLC Marks Card', img: sslc_marks_card },
			{ text: 'PUC Marks Card', img: puc_marks_card },
			{ text: 'INCOME Certificate', img: income_certificate },
			{ text: 'CASTE Certificate', img: caste_certificate },
			{ text: 'Bank Passbook', img: passbook },
			{ text: 'Adhar Card', img: adhar },
			{ text: 'PAN Card', img: pancard },
			{ text: 'Medical Certificate', img: medical_certificate },
			{ text: 'Transfer Certificate', img: transfer_certificate },
		]
	
		// doc.addPage()
		const c = await addImagesSection(images[0]);
		const d = await addImagesSection(images[1]);
		const e = await addImagesSection(images[2]);
		const f = await addImagesSection(images[3]);
		const g = await addImagesSection(images[4]);
		const h = await addImagesSection(images[5]);
		const i = await addImagesSection(images[6]);
		const j = await addImagesSection(images[7]);
		const k = await addImagesSection(images[8]);

		doc.end()
	} catch (error) {
		return res.send({ error })
	}
}

module.exports = { generatePDF }