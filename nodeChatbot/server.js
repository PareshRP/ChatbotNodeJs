const express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);      //chat application

app.use(express.static(__dirname));


async function botstr(findStr) {
  var { NlpManager } = require('node-nlp');       //natural language processing for chatbot
  const manager = new NlpManager({ languages: ['en'], nlu: { useNoneFeature: false } });
  //train the chatbot
  manager.addDocument('en', 'Thank you', 'greetings.bye');
  manager.addDocument('en', 'Bye', 'greetings.bye');
 

  manager.addDocument('en', 'hi', 'greetings.hello');
  manager.addDocument('en', 'I have a query regarding cloud counselage', 'greetings.hello');
  manager.addDocument('en', 'hello', 'greetings.hello');
  manager.addDocument('en', 'hey', 'greetings.hello');
  manager.addDocument('en', '*', 'greetings.hello');

  //General IP Queries
  manager.addDocument('en', '1', 'general.query1');

  manager.addDocument('en', 'G1', 'general.g1');
  manager.addDocument('en', 'G2', 'general.g2');
  manager.addDocument('en', 'G3', 'general.g3');

  //Prerequisites
  manager.addDocument('en', 'P1', 'prerequisites.1'); 
  manager.addDocument('en', 'P2', 'prerequisites.2'); 
  manager.addDocument('en', 'P3', 'prerequisites.3'); 
  manager.addDocument('en', 'P4', 'prerequisites.4'); 
  manager.addDocument('en', 'P5', 'prerequisites.5'); 
  manager.addDocument('en', 'P6', 'prerequisites.6'); 
  manager.addDocument('en', 'P7', 'prerequisites.7'); 
  manager.addDocument('en', 'P8', 'prerequisites.8'); 
  manager.addDocument('en', 'P9', 'prerequisites.9'); 
  manager.addDocument('en', 'P10', 'prerequisites.10'); 
  manager.addDocument('en', 'P11', 'prerequisites.11'); 
  manager.addDocument('en', 'P12', 'prerequisites.12'); 
  manager.addDocument('en', 'P13', 'prerequisites.13'); 
  manager.addDocument('en', 'P14', 'prerequisites.14'); 
  manager.addDocument('en', 'P15', 'prerequisites.15');   
  manager.addDocument('en', 'P16', 'prerequisites.16');   

  //Other queries
  manager.addDocument('en', 'G4', 'general.g4');
  
  manager.addDocument('en', 'Q1', 'other.q1');
  manager.addDocument('en', 'Q2', 'other.q2');
  manager.addDocument('en', 'Q3', 'other.q3');
  manager.addDocument('en', 'Q4', 'other.q4');
  manager.addDocument('en', 'Q5', 'other.q5');
  manager.addDocument('en', 'Q6', 'other.q6');
  manager.addDocument('en', 'Q7', 'other.q7');
  manager.addDocument('en', 'Q8', 'other.q8');
  manager.addDocument('en', 'Q9', 'other.q9');
  manager.addDocument('en', 'Q10', 'other.q10');
  manager.addDocument('en', 'Q11', 'other.q11');
  manager.addDocument('en', 'Q12', 'other.q12');
  manager.addDocument('en', 'Q13', 'other.q13');
  manager.addDocument('en', 'Q14', 'other.q14');
  manager.addDocument('en', 'Q15', 'other.q15');


  //Learning Path-1
  manager.addDocument('en', '2', 'lp1.query2');

  manager.addDocument('en', 'LP1-1', 'lp1.1');
  manager.addDocument('en', 'LP1-2', 'lp1.2');
  manager.addDocument('en', 'LP1-3', 'lp1.3');
  manager.addDocument('en', 'LP1-4', 'lp1.4');
  manager.addDocument('en', 'LP1-5', 'lp1.5');
  manager.addDocument('en', 'LP1-6', 'lp1.6');
  manager.addDocument('en', 'LP1-7', 'lp1.7');
  manager.addDocument('en', 'LP1-8', 'lp1.8');
  manager.addDocument('en', 'LP1-9', 'lp1.9');
  manager.addDocument('en', 'LP1-10', 'lp1.10');
  manager.addDocument('en', 'LP1-11', 'lp1.11');
  manager.addDocument('en', 'LP1-12', 'lp1.12');
  manager.addDocument('en', 'LP1-13', 'lp1.13');

  //Learning Path-2
  manager.addDocument('en', '3', 'lp2.query3');

  manager.addDocument('en', 'LP2-1', 'lp2.1');
  manager.addDocument('en', 'LP2-2', 'lp2.2');
  manager.addDocument('en', 'LP2-3', 'lp2.3');
  manager.addDocument('en', 'LP2-4', 'lp2.4');
  manager.addDocument('en', 'LP2-5', 'lp2.5');
  manager.addDocument('en', 'LP2-6', 'lp2.6');
  manager.addDocument('en', 'LP2-7', 'lp2.7');
  manager.addDocument('en', 'LP2-8', 'lp2.8');
  manager.addDocument('en', 'LP2-9', 'lp2.9');

  //Learning Path-3
  manager.addDocument('en', '4', 'lp3.query4');

  manager.addDocument('en', 'LP3-1', 'lp3.1');
  manager.addDocument('en', 'LP3-2', 'lp3.2');
  manager.addDocument('en', 'LP3-3', 'lp3.3');
  manager.addDocument('en', 'LP3-4', 'lp3.4');
  manager.addDocument('en', 'LP3-5', 'lp3.5');
  manager.addDocument('en', 'LP3-6', 'lp3.6');
  manager.addDocument('en', 'LP3-7', 'lp3.7');
  manager.addDocument('en', 'LP3-8', 'lp3.8');
  manager.addDocument('en', 'LP3-9', 'lp3.9');
  manager.addDocument('en', 'LP3-10', 'lp3.10');
  manager.addDocument('en', 'LP3-11', 'lp3.11');
  manager.addDocument('en', 'LP3-12', 'lp3.12');
  manager.addDocument('en', 'LP3-13', 'lp3.13');

  //Live Project
  manager.addDocument('en', '5', 'lp.query5');

  manager.addDocument('en', 'LP-1', 'lp.1');
  manager.addDocument('en', 'LP-2', 'lp.2');
  manager.addDocument('en', 'LP-3', 'lp.3');
  manager.addDocument('en', 'LP-4', 'lp.4');
  manager.addDocument('en', 'LP-5', 'lp.5');
  manager.addDocument('en', 'LP-6', 'lp.6');
  manager.addDocument('en', 'LP-7', 'lp.7');
  manager.addDocument('en', 'LP-8', 'lp.8');

  manager.addDocument('en', '6', 'bitrix.query6');

  manager.addDocument('en', 'B1', 'bitrix.1');
  manager.addDocument('en', 'B2', 'bitrix.2');
  manager.addDocument('en', 'B3', 'bitrix.3');
  manager.addDocument('en', 'B4', 'bitrix.4');
  manager.addDocument('en', 'B5', 'bitrix.5');
  manager.addDocument('en', 'B6', 'bitrix.6');
  manager.addDocument('en', 'B7', 'bitrix.7');
  manager.addDocument('en', 'B8', 'bitrix.8');
  manager.addDocument('en', 'B9', 'bitrix.9');
  manager.addDocument('en', 'B10', 'bitrix.10');
  manager.addDocument('en', 'B11', 'bitrix.11');
  manager.addDocument('en', 'B12', 'bitrix.12');
  manager.addDocument('en', 'B13', 'bitrix.13');
  manager.addDocument('en', 'B14', 'bitrix.14');
  manager.addDocument('en', 'B15', 'bitrix.15');
  manager.addDocument('en', 'B16', 'bitrix.16');
  manager.addDocument('en', 'B17', 'bitrix.17');
  manager.addDocument('en', 'B18', 'bitrix.18');
  manager.addDocument('en', 'B19', 'bitrix.19');
  manager.addDocument('en', 'B20', 'bitrix.20');
  manager.addDocument('en', 'B21', 'bitrix.21');
  manager.addDocument('en', 'B22', 'bitrix.22');
  manager.addDocument('en', 'B23', 'bitrix.23');
  manager.addDocument('en', 'B24', 'bitrix.24');
  manager.addDocument('en', 'B25', 'bitrix.25');
  manager.addDocument('en', 'B26', 'bitrix.26');

  //************************************************************************************//
  
  // Train also the NLG..........Train it to answer
  manager.addAnswer('en', 'greetings.bye', 'I hope you got your answers.');
  manager.addAnswer('en', 'greetings.bye', 'Bye!');

  manager.addAnswer('en', 'greetings.hello', 'Hi, how may I assist you? <br/> Please reply with the numbers to the corresponding questions:<br/> 1. General IP Queries <br/> 2. Learning Path1<br/> 3. Learning Path 2<br/> 4. Learning Path 3<br/> 5. Live Projects <br/> 6. Bitrix24 Queries');

  manager.addAnswer('en', 'general.query1', 'G1. IP Start date <br/> G2. IP End date <br/>G3. Prerequisites <br/> G4. Other IP Related Queries');

  manager.addAnswer('en', 'general.g1', '01/03/2020');
  manager.addAnswer('en', 'general.g2', '31/07/2020');
  manager.addAnswer('en', 'general.g3', 'P1. I just joined the group and I am not understanding what to do further. How do I start my internship?<br/><br/>P2. have opted for a blockchain internship, can I also learn about AI and do an internship in both? <br/><br/>P3. Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I’m not interested in.<br/><br/> P4. Can we skip any training if we are already clear with the basics? <br/><br/>P5. Is it okay to mention this internship as ongoing for college records?<br/><br/>P6. When will we get a joining letter?<br/><br/>P7. When will we get an internship completion letter?<br/><br/> P8. By when will we receive access to Bitrix24?<br/><br/>P9. Is the induction online or offline?<br/><br/>P10. Will you provide mentorship or doubt clearing sessions in this internship?<br/><br/>P11. Can we visit the office? How many times do we have to visit the office for this internship?<br/><br/>P12. If we are working on more than one technology, are those technologies added to the certificate?<br/><br/>P13. I have not been added to the technology I preferred to work on? <br/><br/>P14. Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march <br/><br/> P15. I did not get my appointment letter yet.<br/><br/>P16. When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?');
  
  manager.addAnswer('en', 'prerequisites.1', 'Please go through the mail from which you have accepted the invite and check the task section as well.');
  manager.addAnswer('en', 'prerequisites.2', 'You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.');
  manager.addAnswer('en', 'prerequisites.3', 'You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now.');
  manager.addAnswer('en', 'prerequisites.4', 'No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later.');
  manager.addAnswer('en', 'prerequisites.5', 'Yes, we will provide every intern a joining letter as soon as all interns are inducted.');
  manager.addAnswer('en', 'prerequisites.6', 'Joining letter to all the interns will be provided on or before the 31st of March 2020.');
  manager.addAnswer('en', 'prerequisites.7', 'This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project.');
  manager.addAnswer('en', 'prerequisites.8', 'If you have submitted the "New Joinee Form" after the 1st of March, please wait till the 31st of March to receive your access.');
  manager.addAnswer('en', 'prerequisites.9', 'As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online.');
  manager.addAnswer('en', 'prerequisites.10', 'As this is an internship you are expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat.');
  manager.addAnswer('en', 'prerequisites.11', 'As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment.');
  manager.addAnswer('en', 'prerequisites.12', 'You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for.');
  manager.addAnswer('en', 'prerequisites.13', 'We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies.');
  manager.addAnswer('en', 'prerequisites.14', 'Yes. Although, you can always revisit the induction so that you can review what has been said in it.');
  manager.addAnswer('en', 'prerequisites.15', 'If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you will get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping "Cloud Counselage HR" in B24.');
  manager.addAnswer('en', 'prerequisites.16', 'The dates to begin the learning paths (LP) are: - <br/>LP1 - 01/03/2020 <br/>LP2 - 18/03/2020<br/>LP3 - 02/04/2020 <br/><br/> All learning Paths (LP) are expected to be completed by the interns before the first week of June as Live Projects will begin in that time frame.');


  manager.addAnswer('en', 'general.g4', 'Q1. Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?<br/><br/>Q2. Do I need to pass with the certificate in training.<br/><br/>Q3. The web pages on mobile are not showing properly.<br/><br/>Q4. What to do when our university exams start?<br/><br/> Q5. Can we do another internship with IP?<br/><br/>Q6. Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college?<br/><br/>Q7. Can we extend this internship?<br/><br/> Q8. I could not attend the induction last time, can I get an online induction again? / I want some points said in the introduction, where can I get them.<br/><br/>Q9. I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?<br/><br/>Q10. One of my friends had applied for the IP but she did not receive any further updates.<br/><br/>Q11. Can we be a part of your future development team? /Can we be hired by Cloud Counselage after this internship? <br/><br/>Q12. When will the step 3 of the internship program start?<br/><br/>Q13. What to do after completing LP1/ LP2/ LP3?<br/><br/>Q14. Which Browser I should use?<br/><br/>Q15.What are the company policies for IP interns?');

  manager.addAnswer('en', 'other.q1', 'It is preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that does not mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP).');
  manager.addAnswer('en', 'other.q2', 'No, but please ensure you complete the training.');
  manager.addAnswer('en', 'other.q3', 'They are purposefully only configured for Desktops /Laptops. In an emergency, you can use the "show as desktop" mode of your browser.');
  manager.addAnswer('en', 'other.q4', 'We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.');
  manager.addAnswer('en', 'other.q5', 'Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP.');
  manager.addAnswer('en', 'other.q6', 'Yes, your friends can apply till the 30th of March 2020; <a href="https://www.cloudcounselage.com/ipmaharashtra/" target="_blanck">https://www.cloudcounselage.com/ipmaharashtra/</a>. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR.');
  manager.addAnswer('en', 'other.q7', 'Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.');
  manager.addAnswer('en', 'other.q8', 'We have created a separate page with a pre-recorded induction, please visit it;<a href="https://www.cloudcounselage.co.in/ipinduction" target="_blanck"> https://www.cloudcounselage.co.in/ipinduction</a>');
  manager.addAnswer('en', 'other.q9', 'We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system.');
  manager.addAnswer('en', 'other.q10', 'Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply.');
  manager.addAnswer('en', 'other.q11', 'All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.');
  manager.addAnswer('en', 'other.q12', 'Hope you and your family are in the best of health given the current scenario and you are making the most of your time through the "Internship Program" by Cloud Counselage.<br/>According to the schedule of this internship program, some of you must have completed steps 1 and 2 of your internship and some of you must be in the process of completing step 2.<br/>Please note that as per the program schedule (https://www.cloudcounselage.com/ipmaharashtra/), the following are the dates for entering step 3, wherein interns take preparatory leaves for exams:<br/><br/>a) 16th April 2020 - access given before 31st March 2020<br/><br/>b) 01st May 2020 - access given after 31st March 2020<br/><br/>Kindly note that we are in touch with the DTE - Maharashtra for the exam schedules of various universities in Maharashtra and the start of step 4 will be announced accordingly via individual email and our social media pages.<br/>While step 3 is in progress, you do not need to login to Bitrix24 or submit your timesheet until you are in step 4.<br/>All the best and please stay safe! See you soon in step 4.');
  manager.addAnswer('en', 'other.q13', 'Mark your task as finished and wait for the next instructions.');
  manager.addAnswer('en', 'other.q14', 'Google Chrome is recommended.');
  manager.addAnswer('en', 'other.q15', 'The company policies will be published on <a href="www.cloudcounselage.co.in/ippolicies" target="_blanck">www.cloudcounselage.co.in/ippolicies</a>');

  manager.addAnswer('en', 'lp1.query2', 'LP1-1. Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- "User Not Found”/Website Redirection Issue/ Tokens not working. <br/><br/> LP1-2. Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content? <br/><br/> LP1-3. I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do? /Tokens not working<br/><br/> LP1-4. I did follow the instructions given in the video, but still, I am not able to log in for the LP1 task <br/><br/> LP1-5. What do I do after completing the quiz? how to complete the entire lp1 <br/><br/> LP1-6. Do I need to register every time I do different tasks of lp1?<br/><br/> LP1-7. I am not getting results of the training. <br/><br/> LP1-8. I had press finished button of LP1 task but want to resume the task, how to do that? <br/><br/> LP1-9. Can you help me by telling how can I get to know about my progress of LP-1 <br/><br/> LP1-10. Is it necessary to attend LP1 for other domains as well if we want to take its training. <br/><br/> LP1-11. Are LP1/ LP2/ LP3 a part of the Live Project? <br/><br/> LP1-12. Will these training be enough for us to complete the LP3 and Live Project. <br/><br/> LP1-13. If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 "Cloud Computing"?');

  manager.addAnswer('en', 'lp1.1', 'Please watch the <a href="https://youtu.be/Hs9npUUIg4I" target="_blanck">video</a> shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos.');
  manager.addAnswer('en', 'lp1.2', 'Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you will have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.');
  manager.addAnswer('en', 'lp1.3', 'For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.');
  manager.addAnswer('en', 'lp1.4', 'Ensure you are using the right token');
  manager.addAnswer('en', 'lp1.5', 'There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin.');
  manager.addAnswer('en', 'lp1.6', 'There are codes in the LP1 assignment, and each time you have to register also, please check your task description.');
  manager.addAnswer('en', 'lp1.7', 'They are just for your practice and not for our record, so you do not need the results of LP1 and LP2 training.');
  manager.addAnswer('en', 'lp1.8', 'You can go back to that task and then click on "More" and then "Resume" to restart that task.');
  manager.addAnswer('en', 'lp1.9', 'There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.');
  manager.addAnswer('en', 'lp1.10', 'LP1 training is common across all the technologies.');
  manager.addAnswer('en', 'lp1.11', 'LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.');
  manager.addAnswer('en', 'lp1.12', 'The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.');
  manager.addAnswer('en', 'lp1.13', 'Yes, you will need to complete the mandatory training as cloud computing is fundamental to many technologies and this additional knowledge will help you in your career.');

  manager.addAnswer('en', 'lp2.query3', 'LP2-1. Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content? <br/><br/>LP2-2. I am not getting results of the training. <br/><br/>LP2-3. Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?<br/><br/>LP2-4. What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level? <br/><br/>LP2-5. Why only this training for LP2?<br/><br/> LP2-6. Can I do certification for the training provided in LP2? <br/><br/>LP2-7. The videos of LP2 are taking too much time to load. <br/><br/>LP2-8. Are LP1/ LP2/ LP3 a part of the Live Project? <br/><br/>LP2-9. Will these training be enough for us to complete the LP3 and Live Project.');
  
  manager.addAnswer('en', 'lp2.1', 'Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you will have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.');
  manager.addAnswer('en', 'lp2.2', 'They are just for your practice and not for our record, so you do not need the results of LP1 and LP2 training.');
  manager.addAnswer('en', 'lp2.3', 'It is preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that does not mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP).');
  manager.addAnswer('en', 'lp2.4', 'The main focus of LP2 is to provide you with a basic foundation of the technology you are interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.');
  manager.addAnswer('en', 'lp2.5', 'They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.');
  manager.addAnswer('en', 'lp2.6', 'Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at "no profit no loss" basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in.');
  manager.addAnswer('en', 'lp2.7', 'We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer s RAM and internet connection.');
  manager.addAnswer('en', 'lp2.8', 'LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.');
  manager.addAnswer('en', 'lp2.9', 'The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.');

  manager.addAnswer('en', 'lp3.query4', 'LP3-1. What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level? <br/><br/> LP3-2. What to do after LP3? <br/><br/> LP3-3. What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?  <br/><br/>LP3-4. Live Project/ LP3 has to be submitted individually or it will be a group project? <br/><br/> LP3-5. Are LP1/ LP2/ LP3 a part of the Live Project? <br/><br/>LP3-6. Will I get LP3 and Live project of technology other than what I am selected for? <br/><br/>LP3-7. Where do we push the code in LP3? <br/><br/>LP3-8. Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission? <br/><br/>LP3-9. I am stuck in LP3/ Live project with a technical issue, is there any technical person who can help in this? <br/><br/> LP3-10. I have a query with respect to LP3, what should I do and whom should I ask? <br/><br/>LP3-11. For some reason, I am unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?');

  manager.addAnswer('en', 'lp3.1', 'LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.');
  manager.addAnswer('en', 'lp3.2', 'You will be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.');
  manager.addAnswer('en', 'lp3.3', 'Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.');
  manager.addAnswer('en', 'lp3.4', 'All the LP3/ Live Projects are on an individual scale.');
  manager.addAnswer('en', 'lp3.5', 'LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.');
  manager.addAnswer('en', 'lp3.6', 'No, you will receive LP3 and Live Projects of your respective technology.');
  manager.addAnswer('en', 'lp3.7', 'Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.');
  manager.addAnswer('en', 'lp3.8', 'For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time.');
  manager.addAnswer('en', 'lp3.9', 'As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)');
  manager.addAnswer('en', 'lp3.10', 'As mentioned in the "202003-IP" workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S in your message.');
  manager.addAnswer('en', 'lp3.11', 'Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check.');


  manager.addAnswer('en', 'lp.query5', 'LP-1. What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects? <br/><br/> LP-2. Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage? <br/><br/> LP-3. Will Live Projects have only one technology or a mixture of technologies? <br/><br/> LP-4. Will I get LP3 and Live project of technology other than what I am selected for? <br/><br/> LP-5. Live project s use case will be provided or can we have our own use case? <br/><br/> LP-6. Live Project/ LP3 has to be submitted individually or it will be a group project? <br/><br/> LP-7. I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this? <br/><br/> LP-8. What to do after Live Projects? Are we getting an offer letter/Stipend?');

  manager.addAnswer('en', 'lp.1', 'Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.');
  manager.addAnswer('en', 'lp.2', 'Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.');
  manager.addAnswer('en', 'lp.3', 'Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology.');
  manager.addAnswer('en', 'lp.4', 'No, you will receive LP3 and Live Projects of your respective technology.');
  manager.addAnswer('en', 'lp.5', 'Live project s use case will strictly be provided by Cloud Counselage and you cannot choose your own use case.');
  manager.addAnswer('en', 'lp.6', 'All the LP3/  Live Projects are on an individual scale.');
  manager.addAnswer('en', 'lp.7', 'As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)');
  manager.addAnswer('en', 'lp.8', 'Submit your project and once it is reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you are interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.');

  manager.addAnswer('en', 'bitrix.query6', 'B1. I am not able to access my Bitrix24 account?<br/><br/> B2. How many workgroups will an intern be a part of? /How many workgroups should I be in?<br/><br/> B3. I am not able to see my tasks.<br/><br/> B4. What do we do in the work report?<br/><br/> B5. Unable to access the quiz.<br/><br/> B6. I am not able to view a page /I am logged in the training and still the website asks me to login<br/><br/> B7. I am having trouble finding the workgroup (no workgroup is visible) <br/><br/> B8. I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page.<br/><br/>B9. Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?<br/><br/> B10. Resource links not working. What to do? Should we skip?<br/><br/> B11. Not able to see the task as not part of the IP workgroup. <br/><br/> B12. How can we check our weekly hours?<br/><br/> B13. How do I access my quiz?<br/><br/> B14. I am trying to complete social media tasks. I completed that day and clicked finish but it did not show finished in the task menu. What should I do?<br/><br/>B15. My Efficiency is 0% what should I do?<br/><br/>B16. I forgot to clock in for a few days, will this affect my internship?<br/><br/>B17. I have not got the acknowledgment from you regarding the weekly report.<br/><br/>B18. In my work time I can see one exclamation mark? /What does the remaining time mean?<br/><br/>B19. When will my review on social media update task be done?<br/><br/>B20. Is it necessary to clock-in if I am done with my tasks?<br/><br/> B21. Can we be online after 1 hr in a day?<br/><br/>B22. I have completed one training, I did not find any options to continue my training.<br/><br/>B23. I am getting an error:: Exception: SQLSTATE[HY000]: General error: 1 no such table: layout, what should I do?<br/><br/>B24. I tried it 3-4 times and have to enter token each time I visit it.<br/><br/>B25. Could I have done this training from other websites/ resources?<br/><br/>B26. What is the job profile? Will we be able to work only in the tech we have chosen for the internship?');

  manager.addAnswer('en', 'bitrix.1', 'Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in');
  manager.addAnswer('en', 'bitrix.2', 'Every intern should be a part of 2 workgroups.<br/><br/>1. "202003-IP" -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.<br/>2. "202003-IP-Technology" -- This is a technology-specific workgroup. You will be added to the technology you had enrolled for. For example, "202003-IP-Python" for students who enrolled for python.<br/>If anyone has not been added to any of these workgroups, kindly message "Cloud Counselage HR " regarding the same over bitrix24 platform.');
  manager.addAnswer('en', 'bitrix.3', 'Please remove the default "In Progress" from your filter of the task section and try.');
  manager.addAnswer('en', 'bitrix.4', 'As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on "send to supervisor".');
  manager.addAnswer('en', 'bitrix.5', 'Please retry after some time in an incognito window');
  manager.addAnswer('en', 'bitrix.6', 'This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode. Also, you do not need to record your results, the quizzes are only for your knowledge check and not a metric to score you.');
  manager.addAnswer('en', 'bitrix.7', 'Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName. Ex "202003-IP-DevOps". In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup.');
  manager.addAnswer('en', 'bitrix.8', 'Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page.');
  manager.addAnswer('en', 'bitrix.9', 'If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups.');
  manager.addAnswer('en', 'bitrix.10', 'Please do not skip any piece of training, in case you are not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same.');
  manager.addAnswer('en', 'bitrix.11', 'Please message ‘Cloud Counselage HR’ in Bitrix24');
  manager.addAnswer('en', 'bitrix.12', 'In the menu select "time and reports" ->worktime and then you could see your worktime or click on this link once you are logged in to Bitrix24; https://cloudcounselage24.bitrix24.com/timeman/timeman.php');
  manager.addAnswer('en', 'bitrix.13', 'As mentioned in the video: - <br/><br/>Step1: Go to lp1 module <br/>Step2: Select module <br/>Step3: Put token (it will direct you to the home screen if the token is correct)<br/>Step4: Again go to lp1 module n select that module <br/>Step5: You will get the access by now <br/>Step6: Register there (each time for every module) <br/>Step7: Give the quiz <br/>Step8: Logout');
  manager.addAnswer('en', 'bitrix.14', 'Our team will verify and then only your task shall be accepted as completed. Please wait till the verification is complete.');
  manager.addAnswer('en', 'bitrix.15', 'Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.');
  manager.addAnswer('en', 'bitrix.16', 'This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now.');
  manager.addAnswer('en', 'bitrix.17', 'Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation.');
  manager.addAnswer('en', 'bitrix.18', 'It is showing the remaining time because it is configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.');
  manager.addAnswer('en', 'bitrix.19', 'We will review this task in May 2020.');
  manager.addAnswer('en', 'bitrix.20', 'Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.');
  manager.addAnswer('en', 'bitrix.21', 'Yes, you can be.');
  manager.addAnswer('en', 'bitrix.22', 'Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.');
  manager.addAnswer('en', 'bitrix.23', 'This is due to many webpages opened, please close your browser and try again or you can open a new incognito tab and try again.');
  manager.addAnswer('en', 'bitrix.24', 'We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we are trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:<br/>1. One for each technology, you are a part of. <br/> 2. The lp1 home page. <br/>3. The 6 tokens (one for each step)');
  manager.addAnswer('en', 'bitrix.25', 'Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice');
  manager.addAnswer('en', 'bitrix.26', 'Your job profile is "Technology - Intern"; if you are in cloud computing technology to update in your LinkedIn or resume, you can write as "Cloud Computing - Intern". Yes, you will only work in the technology you are selected for but you can take the training of other technologies');

 
  await manager.train();
  manager.save();
  var response = await manager.process('en', findStr);
  console.log(response);
  //console.log(typeof(response.answer));
  return response.answer;
}

//serve the static html files
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/express/index.html');
});

//events emitters
io.on('connection', function (socket) {
  console.log('A user connected');
  socket.on('Disconnect', function () {
    console.log('User disconnected');
  });
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    botstr(msg)
      .then(result => {
        if (result == null) {
          io.emit('chat message', "Sorry, I didn't get you.");
        }
        else {
          io.emit('chat message', result);
        }
      });

  });
});
//server start
http.listen(8000, function () {
  console.log('listening on: 8000');
});