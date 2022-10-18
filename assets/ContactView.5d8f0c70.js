import{f,_ as h,g as d,o as u,c as _,b as e,w as p,h as n,v as l,d as g}from"./index.d1cde4d4.js";const x=f("contactList",{state:()=>({contactList:[],id:0}),actions:{addForm(o,t,i,s){this.contactList.push({name:o,email:t,phone:i,msg:s,id:this.id++}),console.log(this.contactList)}}}),k={setup(){const o=d(""),t=d(""),i=d(""),s=d(""),r=x();function c(a,m,v,b){r.addForm(a,m,v,b)}return{name:o,email:t,phone:i,msg:s,addItemAndClear:c,store:r}},methods:{showAlert(){alert("Form tersubmit, cek console")}}},q={class:"page-section",id:"contact"},y={class:"container"},A=g('<h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2><div class="divider-custom"><div class="divider-custom-line"></div><div class="divider-custom-icon"><i class="fas fa-star"></i></div><div class="divider-custom-line"></div></div>',2),w={class:"row justify-content-center"},E={class:"col-lg-8 col-xl-7"},V={class:"form-floating mb-3"},C=e("label",{for:"name"},"Full name",-1),F=e("div",{class:"invalid-feedback","data-sb-feedback":"name:required"},"A name is required.",-1),M={class:"form-floating mb-3"},S=e("label",{for:"email"},"Email address",-1),B=e("div",{class:"invalid-feedback","data-sb-feedback":"email:required"},"An email is required.",-1),L=e("div",{class:"invalid-feedback","data-sb-feedback":"email:email"},"Email is not valid.",-1),U={class:"form-floating mb-3"},I=e("label",{for:"phone"},"Phone number",-1),N=e("div",{class:"invalid-feedback","data-sb-feedback":"phone:required"},"A phone number is required. ",-1),j={class:"form-floating mb-3"},D=e("label",{for:"message"},"Message",-1),P=e("div",{class:"invalid-feedback","data-sb-feedback":"message:required"},"A message is required. ",-1),T=e("div",{class:"d-none",id:"submitErrorMessage"},[e("div",{class:"text-center text-danger mb-3"},"Error sending message!")],-1);function z(o,t,i,s,r,c){return u(),_("section",q,[e("div",y,[A,e("div",w,[e("div",E,[e("form",{onSubmit:t[5]||(t[5]=p(a=>s.addItemAndClear(s.name,s.email,s.phone,s.msg),["prevent"])),id:"contactForm"},[e("div",V,[n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.name=a),class:"form-control",id:"name",type:"text",placeholder:"Enter your name...","data-sb-validations":"required"},null,512),[[l,s.name]]),C,F]),e("div",M,[n(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s.email=a),class:"form-control",id:"email",type:"email",placeholder:"name@example.com","data-sb-validations":"required,email"},null,512),[[l,s.email]]),S,B,L]),e("div",U,[n(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>s.phone=a),class:"form-control",id:"phone",type:"tel",placeholder:"(123) 456-7890","data-sb-validations":"required"},null,512),[[l,s.phone]]),I,N]),e("div",j,[n(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=a=>s.msg=a),class:"form-control",id:"message",type:"text",placeholder:"Enter your message here...",style:{height:"10rem"},"data-sb-validations":"required"},null,512),[[l,s.msg]]),D,P]),T,e("button",{class:"btn btn-primary btn-xl",id:"submitButton",type:"submit",onClick:t[4]||(t[4]=a=>c.showAlert())},"Send")],32)])])])])}const H=h(k,[["render",z]]);export{H as default};
