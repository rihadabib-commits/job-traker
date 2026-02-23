// INTERVIEW AVAILABLE
const interviewavailabele=document.getElementById("interviewavailabele");
const of=document.getElementById("of");
// no jobs 
const noJobsShow=document.getElementById("noJobs");
// interview section 
const interviewSection=document.getElementById("interview-section");
// reject section 
const rejectSection=document.getElementById("reject-section");
// all cards 
const allCards=document.getElementById("allCards");

// delete section 
const deleteBtn=document.getElementById("delete");
// Main  section 
const mainSection=document.getElementById('mainsection');
// total count 
let totalCount=document.getElementById("allCards");
let availableJobs=document.getElementById("availableJobs");
const total=document.getElementById("totalCount");

// interview count 
let interviewCount=[];
const interview=document.getElementById("interview");

// rejected count 
let rejectedCount=[];
const rejected=document.getElementById("rejected");


function calculateCount(){
    total.innerText=totalCount.children.length;
    availableJobs.innerText=totalCount.children.length;
    interview.innerText=interviewCount.length;
    rejected.innerText=rejectedCount.length;
}

calculateCount();


// important three button all interview rejected
const allbtn=document.getElementById("allbtn");
const interviewbtn=document.getElementById("interviewbtn");
const rejectedbtn=document.getElementById("rejectedbtn");

// button toggle 
function toggleBtn(id){
    interviewavailabele.classList.remove("hidden");
    of.classList.remove("hidden");
    noJobsShow.classList.add("hidden");
    // remove all bg 
    allbtn.classList.remove('bg-[#3B82F6]','text-white');
    interviewbtn.classList.remove('bg-[#3B82F6]','text-white');
    rejectedbtn.classList.remove('bg-[#3B82F6]','text-white');

    // add all bg 
    allbtn.classList.add('bg-white','text-[#64748B]');
    interviewbtn.classList.add('bg-white','text-[#64748B]');
    rejectedbtn.classList.add('bg-white','text-[#64748B]');

    // select button er bg change 
    let select=document.getElementById(id);
    select.classList.remove('bg-white','text-[#64748B]');
    select.classList.add('bg-[#3B82F6]','text-white');

    // hide all Selection 
    allCards.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");

    // show all section 
    if(id === 'allbtn'){
        allCards.classList.remove("hidden");
        noJobsShow.classList.add("hidden");
        interviewavailabele.classList.add("hidden");
        of.classList.add("hidden");
    }
    else if(id === 'interviewbtn'){
        if(interviewCount.length==0){
            interviewSectionSHow()
            noJobsShow.classList.remove("hidden");
            interviewavailabele.classList.remove("hidden");
            of.classList.remove("hidden");
            interviewavailabele.innerText=interviewCount.length;
        }
        else{
            interviewSectionSHow()
            interviewSection.classList.remove("hidden");
            interviewavailabele.classList.remove("hidden");
            of.classList.remove("hidden");
            interviewavailabele.innerText=interviewCount.length;
        }
        
    }
    else if(id === 'rejectedbtn'){
        if(rejectedCount.length==0){
            rejectSectionSHow()
            noJobsShow.classList.remove("hidden");
            interviewavailabele.classList.remove("hidden");
            of.classList.remove("hidden");
            interviewavailabele.innerText=rejectedCount.length;
        }
        else{
            rejectSectionSHow()
            rejectSection.classList.remove("hidden");
            interviewavailabele.classList.remove("hidden");
            of.classList.remove("hidden");
            interviewavailabele.innerText=rejectedCount.length;
        }
    }
}

mainSection.addEventListener('click',function(event){
    if(event.target.classList.contains('interviewclick')){
        let parentNodes=event.target.closest('.card');
        const tittleName=parentNodes.querySelector('.tittleName').innerText;
        const roleName=parentNodes.querySelector('.roleName').innerText;
        const salary=parentNodes.querySelector('.salary').innerText;
        const status=parentNodes.querySelector('.status').innerText;
        const description=parentNodes.querySelector('.description').innerText;
        parentNodes.querySelector(".status").innerText="Interview";
        const cardInfo={
            tittleName,
            roleName,
            salary,
            status:"Interview",
            description
        }
        let tittleNameFind=interviewCount.find(item => item.tittleName == cardInfo.tittleName);
        if(!tittleNameFind){
            interviewCount.push(cardInfo);
        }
        rejectedCount=rejectedCount.filter(item => item.tittleName !==cardInfo.tittleName);
        calculateCount();
        interviewSectionSHow();
        rejectSectionSHow();
    }
    else if(event.target.classList.contains('rejectclick')){
        let parentNodes=event.target.closest('.card');
        const tittleName=parentNodes.querySelector('.tittleName').innerText;
        const roleName=parentNodes.querySelector('.roleName').innerText;
        const salary=parentNodes.querySelector('.salary').innerText;
        const status=parentNodes.querySelector('.status').innerText;
        const description=parentNodes.querySelector('.description').innerText;
        parentNodes.querySelector(".status").innerText="Rejected";
        const cardInfo={
            tittleName,
            roleName,
            salary,
            status:"Rejected",
            description
        }
        let tittleNameFind=rejectedCount.find(item => item.tittleName == cardInfo.tittleName);
        if(!tittleNameFind){
            rejectedCount.push(cardInfo);
        }
        interviewCount=interviewCount.filter(item => item.tittleName !==cardInfo.tittleName);
        calculateCount();
        interviewSectionSHow();
        rejectSectionSHow();
    }
    else if(event.target.classList.contains('deleteBtn') || event.target.closest('.deleteBtn')){
        let parentCard=event.target.closest('.card');
        const tittleName=parentCard.querySelector('.tittleName').innerText;
        parentCard.remove();

        interviewCount=interviewCount.filter(item => item.tittleName !== tittleName);
        rejectedCount=rejectedCount.filter(item => item.tittleName !== tittleName);

        calculateCount();
        interviewSectionSHow();
        rejectSectionSHow();

        if(!allCards.classList.contains("hidden") && allCards.children.length === 0){
            noJobsShow.classList.remove("hidden");
        }
        else if(!interviewSection.classList.contains("hidden") && interviewSection.children.length === 0){
            noJobsShow.classList.remove("hidden");
        }
        else if(!rejectSection.classList.contains("hidden") && rejectSection.children.length === 0){
            noJobsShow.classList.remove("hidden");
        }
    }
    if(!interviewSection.classList.contains("hidden")){
        toggleBtn('interviewbtn');
    }
    if(!rejectSection.classList.contains("hidden")){
        toggleBtn("rejectedbtn")
    }
})

const deleteBtns=document.getElementsByClassName('deleteBtn');

// INTERVIEW SECTION SHOWFUNCTION 
function interviewSectionSHow(){
    interviewSection.innerHTML="";
    for(let interview of interviewCount){
        let div=document.createElement('div');
        div.className='card flex justify-between bg-white p-6 rounded-sm';
        div.innerHTML=`
        <!-- card 1 -->
            <div>
                <h1 class="tittleName text-[#002C5C] font-semibold text-[18px]">${interview.tittleName}</h1>
                <p class="roleName text-[#64748B] mt-1">${interview.roleName}</p>
                <p class="salary text-[#64748B] text-[14px] mt-5">${interview.salary}</p>
                <button class="status py-2 px-3 bg-[#EEF4FF] text-[#002C5C] mt-5">${interview.status}</button>
                <p class="description text-[#323B49] text-[14px] mt-2">${interview.description}</p>
                <!-- two main button  -->
                <div class="mt-5 flex gap-2">
                    <button class="interviewclick py-2 px-3 ring-2 ring-[#10B981] text-[#10B981] rounded-sm">interview</button>
                    <button class="rejectclick py-2 px-3 ring-2 ring-[#EF4444] text-[#EF4444] rounded-sm">Rejected</button>
                </div>
            </div>
            <!-- right -->
            <div>
                <div class="deleteBtn w-8 h-8  border border-[#F1F2F4] rounded-full flex justify-center items-center"><i
                        class="fa-regular fa-trash-can"></i></div>
            </div>
        `
        interviewSection.appendChild(div);
    }
}

// REJECT SECTION  SHOW FUNCTION
function rejectSectionSHow(){
    rejectSection.innerHTML="";
    for(let reject of rejectedCount){
        let div=document.createElement('div');
        div.className='card flex justify-between bg-white p-6 rounded-sm';
        div.innerHTML=`
        <!-- card 1 -->
            <div>
                <h1 class="tittleName text-[#002C5C] font-semibold text-[18px]">${reject.tittleName}</h1>
                <p class="roleName text-[#64748B] mt-1">${reject.roleName}</p>
                <p class="salary text-[#64748B] text-[14px] mt-5">${reject.salary}</p>
                <button class="status py-2 px-3 bg-[#EEF4FF] text-[#002C5C] mt-5">${reject.status}</button>
                <p class="description text-[#323B49] text-[14px] mt-2">${reject.description}</p>
                <!-- two main button  -->
                <div class="mt-5 flex gap-2">
                    <button class="interviewclick py-2 px-3 ring-2 ring-[#10B981] text-[#10B981] rounded-sm">interview</button>
                    <button class="rejectclick py-2 px-3 ring-2 ring-[#EF4444] text-[#EF4444] rounded-sm">Rejected</button>
                </div>
            </div>
            <!-- right -->
            <div>
                <div class="deleteBtn w-8 h-8  border border-[#F1F2F4] rounded-full flex justify-center items-center"><i
                        class="fa-regular fa-trash-can"></i></div>
            </div>
        `
        rejectSection.appendChild(div);
    }
}

calculateCount();

