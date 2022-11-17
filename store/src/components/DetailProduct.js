import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Style
import style from "./DetailProduct.module.css"

const productArray = [
    {
        id: 1,
        image: "https://fronthooks.ir/images/React.svg",
        Name: "دوره متخصص ریکت و ریداکس",
        Time: 52,
        Students: 2200,
        Session: 410,
        DetailsTitle: `بی شک ریکت یکی از محبوب ترین لایبرری ها برای طراحی UI است. این لایبرری توسط فیسبوک پشتیبانی میشود و بازار کار و کامیونیتی گسترده‌ای در ایران و سایر کشور ها دارد و یکی از انتخاب ها برای شروع یک مهارت به عنوان برنامه نویس Front end می باشد.`,
        Price: 2_400_000,
        Details: `React یکی از کتابخانه‌های متن باز و رایگان جاوا اسکریپت است که توسط فیسبوک و برای بهبود طراحی رابط کاربری در وب عرضه شده است. هدف React این است که روند توسعه ساده و سریع شود و یادگیری آن فرصت‌های شغلی جدیدی را برای شما به ارمغان می‌آورد. ویژگی‌های کاربردی این کتابخانه باعث شده که اغلب برنامه‌نویسان جاوا اسکریپت برای یادگیری آن اقدام کنند. در نگاه اول شاید برخی تصور کنند که React Native بسیار شبیه به React یا همان ReactJs است اما تفاوت‌های زیادی بین این دو وجود دارد و یکی نیستند. React Native یک فریم‌ورک کراس پلتفرم زبان جاوا اسکریپت است درحالی‌که React یکی از کتابخانه‌های این زبان محسوب می‌شود.
        چرا باید در دوره آموزش React شرکت کنیم و آنرا یاد بگیریم؟
        دلایل بسیاری برای این مسئله وجود داره ، اما باید به این نکته مهم اشاره کنیم که در دنیا امروز توجه بسیار ویژه ای به جلوه های بصری و UI می‌شود و عده بسیار زیادی از محققان معتقدند که اگر وب سایت یا اپلیکیشنی این طراحی جذاب و کاربرپسند را نداشته باشند شانس اینکه مورد توجه کاربران قرار بگیرند کاهش می‌یابد.
        آموزش برنامه نویسی ری اکت به شما این امکان را می‌دهد که ظرف مدت کوتاهی بتوانید بهترین UX و UI را برای کابرانتان طراحی و اجرا کنید.این دوره شما را به خوبی با کتابخانه React آشنا می‌کند و اگر به فکر افزایش سطح مهارت خود هستید، می‌توانید روی این دوره حساب کنید.`
    },
    {
        id: 2,
        image: "https://fronthooks.ir/images/tailwindCSS.svg",
        Name: "دوره جامع و پیشرفته TailwindCSS",
        Time: 18,
        Students: 400,
        Session: 90,
        DetailsTitle: `مقیاس جهانی رو به پیشرفت هست. به نحوی که در یک سال گذشته از دانلود هفتگی600  هزار به 2.6 میلیون دانلود هفتگی رسیده. تیلویند (TailwindCSS) یک فریمورک برای توسعه رابط کاربری (فرانت اند) است.`,
        Price: 700_000,
        Details: `
        آمارهای گیت هاب و سایت npmtrends نشان میده که بازارکار فریمورک tailwindCSS در یک مقیاس جهانی رو به پیشرفت هست. به نحوی که در یک سال گذشته از دانلود هفتگی600  هزار به 2.6 میلیون دانلود هفتگی رسیده. تیلویند (TailwindCSS) یک فریمورک برای توسعه رابط کاربری (فرانت اند) است. از جمله مزیت های تیلویند افزایش سرعت توسعه برنامه ها، قابلیت شخصی سازی بالا و هم چنین سرعت بالای سایت با کمترین حجم CSS نهایی هست که همین باعث شده از زمان انتشار (سال 2019) تا به الان (اوایل 2022) طرفداران زیادی را پیدا کند.
        اتفاقا یکی از مزیت های بشدت جذاب تیلویند همینه و میتونم بگم برای همیشه از مشکلات رسپانسیو سازی خداحافظی کنید. در واقع استایل دهی بر اساس mobile-first هست. یعنی از پیاده سازی UI در سایز گوشی موبایل شروع میکنیم و با مدیا کوئری های داخلی که خود تیلویند در اختیار ما قرار میده در سایز تبلت و دسکتاپ هم، استایل و چینش جدید را ایجاد میکنیم. 
        `
    },
    {
        id: 3,
        image: "https://fronthooks.ir/images/javascript.svg",
        Name: "دوره متخصص جاوااسکریپت",
        Time: 90,
        Students: 1320,
        Session: 500,
        DetailsTitle: `بهتر است از این زبان به عنوان آچار فرانسه یاد کنیم. زبانی که به ما این امکان را میدهد تا برنامه های تحت وب(فرانت اند و بک اند)، موبایل(android و ios)،دسکتاپ، بازی و ... راتوسعه بدهیم و همین امر باعث شده تا محبوبیت زیاده داشته باشد و البته این محبوبیت در نهایت منجر به بازار کار فوق العاده آن میشود.`,
        Price: 1_700_000,
        Details: `
        آمارهای گیت هاب و سایت stack overflow نشان میده که بازارکار جاوااسکریپت چه در ایران و چه در خارج از کشور رشد چشم گیری در این چند سال اخیر داشته. تا جایی که در سال 2019، جاوااسکریپت به عنوان محبوب ترین زبان برنامه نویسی شناخته شد. یکی از دلایل محبوب زبان برنامه نویسی جاوااسکریپت، آپدیت های زبان جاوااسکریپت هست که جذابیت این زبان را بیشتر کرده است
        از اوایل اسفند 99 تا اواسط خرداد 1400روی این دوره وقت گذاشتم، چون بعد از کارکردن با بیش از 125 دانش پذیر که با من کوچ خصوصی داشتن، به یک مشکل پی بردم که اکثر این افراد درک درستی از مفاهیم جاوااسکریپتی نداشتن و به همین علت یادگیری ریکت (reactjs)، vuejs و فریمورک های دیگه براشون واقعا دشوار بود. این دوره آماده شد تا شما در یک قدمی بازار کار قرار بگیرید
        خیلی به این فکر کردم که جاوااسکریپت رو چطور برای شما قابل فهم و کاربردی بگم. بنابراین تصمیم گرفتم دوره رو به دو بخش کلی تقسیم کنم. بخش اول که شامل فصل 1 تا 6 هست. طی این شش فصل، شما به صورت کاملا کاربردی مفاهیم بیسیک زبان برنامه نویسی جاوااسکریپت مثل الگوریتم ها، عملگراها، آرایه و آبجکت و.. رو یاد میگیرید. در پایان هر فصل تمرین هایی رو گذاشتم تا بتونم مهارت حل مساله شما رو تقویت کنم. در بخش دوم، به کمک چیزایی که در بخش اول فرا گرفتیم، پروژه میزنیم. پروژه ها از ساده شروع میشه. اما این پروژه ها واقعی هستند، پس همزمان لازم میشه که مفاهیم DOM را کاربری یاد بگیریم. در ادامه مباحث پیشرفته تر مثل async Js و برنامه نویسی شی گرا گفته میشه، پس ابتدا با مساله های کوچک این مفاهیم رو یاد میگیریم و برای هر کدام پروژه میزنیم. این دوره سه تا وبینار هم داره.
        `
    },
    {
        id: 4,
        image: "https://fronthooks.ir/images/html-css.svg",
        Name: "دوره HTML + CSS",
        Time: 60,
        Students: 800,
        Session: 145,
        DetailsTitle: `اولین قدم برای ورود به دنیای برنامه نویسی وب و فرانت اند یادگیری HTML&CSS است که به ما این امکان را میدهد تا ظاهر استاتیک سایت را پیاده بکنیم. منظور از پیاده سازی ظاهر طراحی با ابزار هایی مثل Adobe XD و .. نیست. این یک مهارت جدا است که توسط شخص دیگری انجام میشود و وظیفه شما پیاده سازی دقیق طرح گرافیکی به وسیله کد های HTML&CSS است.`,
        Price: 500_000,
        Details: `
        خیلی از بچه ها، بعد چندین دوره HTML و CSS، باز هم نمی تونن یک طرح ساده رو پیاده کنن. چون متاسفانه، از همون ابتدا سعی کردن که دانشجو رو با فریمورک های آماده عادت بدهند که اصلا راهکار خوبی نیست و در دراز مدت بهشون ضربه بزرگی میزنه. طبیعتا یادگیری فریمورک ها خوبه ، اما هیچ وقت، فریمورک هایی مثل بوتسترپ  (Bootstrap)، تیلویند (TailwindCSS) و چیزای دیگه، ما رو از یادگیری مفاهیم اصلی و بشدت کاربردی مثل Flex – Grid – Responsive design بی نیاز نمی کنن. یادگیری اصولی مفاهیم هست که بین برنامه نویس خوب و بد، تمایز ایجاد میکنه. بنابراین، تمام تمرکز من هم روی تدریس دقیق مفاهیم کاربردی HTML و CSS در طی پیاده کردن پروژه ها بوده.
        این دوره پشتیبانی منحصربفرد دارد. پشتیبانی به صورت گروه های ویژه تلگرامی هست و فقط خودم جوابگوی هر گونه سوال و ابهام شما چه در مسائل فنی و چه در پروسه استخدامی و رزومه سازی هستم. 
        سوال بسیار خوبیه. دلیل اول : توی این دوره میخوام یکبار برای همیشه با همین مفاهیم پایه ای HTML CSS یک پروژه کاملا واقعی با رعایت کوچک ترین جزییات، پیاده کنیم. چیزی که حتی در اکثر دوره های غیر رایگان هم پیدا نمیشه. وقتی میگم یک پروژه کامل، طبیعتا رعایت اندازه های رسپانسیو متن ها، تعریف متغیر ها، بلاک بندی برنامه با فلکس و گرید در سایزهای مختلف دستگاه ها، کدنویسی تمیز CSS ، اسم گذاری اصولی کلاس ها مهم میشه. پس رعایت همه ی این اصول طی یه پروژه واقعی، فرایند یادگیری رو براتون ساده میکنه. دلیل دوم : دوره های رایگان عملا تضمینی بابت آپدیت و کیفیت مطالب ندارند. دلیل سوم : شما در این دوره تمرین دارید. یک UI کاملا واقعی بهتون داده میشه و دانشجو موظف است که این طرح رو پیاده کنه. دلیل چهارم : پشتیبانی دوره های من قطعا منحصر بفرد است. تیم پشتیبانی ندارم! و پشتیبان تک تک بچه ها شخص خودم هستم
        `
    },
    {
        id: 5,
        image: "https://fronthooks.ir/images/nextjs.svg",
        Name: "دوره متخصص Next.js",
        Time: 40,
        Students: 230,
        Session: 210,
        DetailsTitle: `یک فریمورک فول استک مبتنی بر وب است که برای تولید وب سایت ها و اپلیکیشن های تحت وب کاربرد دارد که در مجموع سبب بهبود عملکرد برنامه ها و اپلیکیشن های شما میشود`,
        Price: 2_800_000,
        Details: `
        js یک فریمورک فول استک مبتنی بر ریکت هست برای تولید وبسایت ها و وب اپلیکیشن های تحت وب با سرعت و عملکرد بهتر. به طور خلاصه، Next.js همان ریکت هست به علاوه چندین ویژگی قدرتمند دیگر، یعنی تمام مفاهیم React.js همچنان در Next.js هم استفاده می شود. برخلاف کتابخانه ریکت، نکست یک فریمورک هست و اکثر ابزارهایی را که نیاز داریم، خود نکست آماده دارد. به کمک نکست میتوان همزمان بک اند را هم توسعه داد و این ویژگی نکست را خیلی متمایز کرده است.
        اگه دانشجو احساس کنه، کسی کنارش هست که کل مسیر رو رفته با اطمینان خاطر بیشتری یاد میگیره، در این مسیر تجربه های خودم رو بهش میگم و نمیذارم مسیر اشتباهی بره و یادگیری براش لذت بخش خواهد شد. این دوره یک وبینار داره که در طول دوره برگزار میشه. در این وبینارها مسائل مربوط به فرایند استخدامی، رزومه سازی، نمونه کار و سوالات فنی دانشجویان جواب داده میشه. 
        خیلی مهمه که شما با چه ذهیتی و از چه کسی برنامه نویسی را یاد بگیرید. برای من  باعث افتخاره که خودم رو معلم بدونم و توی آموزش مساله ای که برام اهمیت داره اینه که توی تدریس همراه دانشجو باشم و همیشه یک مفهوم رو با طرح یک مساله تدریس میکنم. به راه حل ها فکر میکنیم و پیاده میکنیم. مساله رو پیچیده تر میکنیم و با ترکیب چیزایی که از قبل یاد گرفتیم، به بهینه ترین راه حل میرسیم. این مدل تدریس من هست. قطعا پشتیبانی، وبینارها و پروژه محور بودن از ویژگی های این دوره هست که توی هیچ دوره ی برنامه نویسی دیگه ای، وبیناری برای آسان کردن مسیر استخدامی برگزار نمیشه و بعد یادگیری دانشجو سردرگم میشه و میره دنبال دوره های دیگه. این دوره دقیقا جاییه که جلو همه ی این اتفاقات رو میگیره. 
        `
    },
    {
        id: 6,
        image: "https://fronthooks.ir/images/git.svg",
        Name: "دوره گیت و گیت هاب",
        Time: 2,
        Students: 1000,
        Session: 32,
        DetailsTitle: `مهم نیست که تو چه حوزه و زبانی فعالیت میکنید، باید کار با گیت را بلد باشید. از گیت برای ورژن بندی کردن برنامه استفاده میشود و بدون آن کار تیمی خیلی سخت و غیرممکن میشود. و البته برای کسایی که در حال یادگیری هستن یکی از بهترین راه های جمع کردن نمونه کاراستفاده از گیت است.`,
        Price: 300_000,
        Details: `
        فرقی نداره، تازه کار هستی یا حرفه ای، توی تیم هستی یا فریلنسری و یا روی چه پلتفرم توسعه نرم افزار کار میکنی، باید بتونی پروژه هات رو با گیت مدیریت کنی. گیت یک روش برای مدیریت پروژه برنامه نویسی هست که مشخص میکنه چه کسی در چه زمانی و چه قسمتی از کد ها رو تغییر داده.
        تا حالا به این فکر کردی که اعضاء یه تیم چطوری به کدهای هم دیگر دسترسی پیدا میکنن ؟ شاید خیلیا فکر کنن توی واتس اپ میفرستن. اما اصلا اینکار امکان پذیر نیست، چون باید جایی باشد که همه چیز ضبط بشه و بدونیم که کدوم یکی از اعضا تیم چه فایلی و حتی چه قسمت از فایل را تغییر داده. گیت هاب و گیت لب جاییه که اعضاء تیم سورس کدهاشون رو اونجا با هم به اشتراک میذارن.
        جدای از تمام دلایل بالا که گفتم، در فاز توسعه هر کدی که میزنیم نباید به اون نسخه اصلی کد (که مطمین هستیم کار میکنه) آسیب بزنه پس لازم میشه که خیالمون راحت باشه که نسخه منتشر شده و نهایی که الان دست مشتری هست، آسیبی بهش نمیرسه. هر چند که کار تیمی و به اشتراک گذاری کدها اینجا خیلی بیشتر اهمیت پیدا میکنه. 
        `
    },
    {
        id: 7,
        image: "https://fronthooks.ir/images/flex-grid.svg",
        Name: "دوره پروژه محور فلکس و گرید",
        Time: 4,
        Students: 900,
        Session: 50,
        DetailsTitle: `برنامه ای که طراحی میشه باید برای طیف وسیعی از دستگاه ها با سایز های مختلف صفحه نمایش قابل استفاده باشد. به این نوع طراحی میگن، طراحی رسپانسیو یا واکنشگرا. یکی از ابزارها برای این کار استفاده از فلکس و گریده.`,
        Price: 100_000,
        Details: `
        برنامه ای که طراحی میشه باید برای طیف وسیعی از دستگاه ها با سایز های مختلف صفحه نمایش قابل استفاده باشد. به این نوع طراحی میگن، طراحی رسپانسیو یا واکنشگرا. یکی از ابزارها برای این کار استفاده از فلکس و گریده.
        مثل همیشه سبک تدریس من اینجوری بوده که ابتدا چرایی استفاده از این ابزار رو یاد میگیریم و بعدش مفاهیم کامل فلکس و گرید تا سطح کاملا پیشرفته به صورت عملی آموزش داده میشه. در مرحله بعدی یک پروژه واقعی رسپانسیو شده با گرید و فلکس پیاده میشه. 
        با تعداد زیادی از دوستان که حرف میزدم بعد از هزینه های میلیونی در کلاس ها و بونت کمپ های طراحی سایت، اسم فلکس و گرید رو نشنیده بودن! برای کسی که میخواد فرانت کار کنه یادگیری حرفه ای css و بعدش جاوااسکریپت لازمه. به همین دلیل تصمیم گرفتم که این دوره رو آماده کنم.
        `
    },
    {
        id: 8,
        image: "https://fronthooks.ir/images/freelancering.svg",
        Name: "دوره تجربیات فریلنسری",
        Time: 10,
        Students: 100,
        Session: 20,
        DetailsTitle: `فریلنسری یکی از دغدغه های بسیاری از افراد است که قصد ورود به دنیای فریلنسری را دارند و هدف بنده از دوره رساندن شما به کسب و کار فریلنسری است `,
        Price: 430_000,
        Details: `
        فریلنسری یک سبک زندگی هست که عملا کار و تفریح با هم ترکیب می شوند و یک فریلنسر همه کاره خودش هست. طبیعتا فرآیند پروژه گرفتن، قیمت گذاری، مذاکره، شبکه سازی و استفاده از پتانسیل لینکدین و مدیرت زمان و زندگی پارامتر های مهمی هستند. تجربه بیش از سه سال زندگی فریلنسری من توی این دوره کامل گفته شده.
        `
    },
    {
        id: 9,
        image: "https://fronthooks.ir/images/vs-code.svg",
        Name: "دوره متخصص کار با VS Code",
        Time: 2,
        Students: 160,
        Session: 40,
        DetailsTitle: `اگر در گروه های برنامه نویسی موجود در شبکه های مجازی مختلف حضور داشته باشید، قطعا متوجه می شوید که ادیتور VsCode محبوب ترین و پر استفاده ترین ادیتور بین برنامه نویسان است. البته یکی از دلایل محبوبیت وی اس کد، حجم پایین، داشتن اکستنشن های کاربردی مختلف، پشتیبانی از گیت، کراس پلتفرم بودن و … است. یعنی اگر شما سیستم ضعیفی برای کدنویسی داشته باشید باز هم وی اس کد کار شما را بدون هیچ مشکل و اذیتی راه می اندازد.`,
        Price: 80_000,
        Details: `
        Visual Studio Code در واقع محیط مبتنی بر ویرایشگر کد منبع است که با انواع زبان های برنامه نویسی از جمله جاوا، جاوا اسکریپت، Go، Node.js، پایتون و C++ قابل استفاده است. این ویرایشگر بر اساس فریم‌ ورک Electron نوشته شده که برای توسعه برنامه های کاربردی وب Node.js که بر روی موتور طرح بندی Blink اجرا می شوند، به کار می رود.
        محیط ادیتور کد Visual Studio Code که به صورت مخفف VS Code هم نامیده می شود، امکان استفاده و باز کردن همزمان یک یا چند دایرکتوری را به کاربر می دهد. همچنین از زبان های برنامه نویسی متعددی پشتیبانی می کند اما در عین حال، ویژگی های آن با هر زبان برنامه نویسی متفاوت است.
        تنظیمات این ادیتور به گونه ای است که می توان فایل ها و یا فولدرهای غیرضروری را در پروژه حاصل، حذف نمود. افزونه های زیادی نیز برای Visual Studio Code در نظر گرفته شده است که قابلیت های زیادی را از نظر قابلیت ویرایش و یا زبان های تحت پشتیبانی به این محیط، اضافه می کند.
        `
    },
]


const DetailProduct = () => {
    const params = useParams()
    const productID = params.id

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productArray)
    }, [])

    const mainProduct = products.find(product => product.id == productID)

    return (
        <section className={style.DetailContainer}>
            {
                mainProduct ?
                    <div className={style.DetailsBoxContainer}>

                        <div className={style.DetailsCourseContainer}>
                            <div className={style.DetailsRightPart}>
                                <h2 className={style.DetailProductName}>{mainProduct.Name}</h2>
                                <h5 className={style.DetailProductGoals}>{mainProduct.DetailsTitle}</h5>

                                <div className={style.DetailsProductFooter}>

                                    <button className={style.DetailsProductBtn}>
                                        <span>ثبت نام دوره</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </button>

                                    <span className={style.DetailsProductPrice}>{mainProduct.Price.toLocaleString('en-US')} تومان</span>
                                </div>
                            </div>

                            <div className={style.DetailLeftPart}>
                                <div className={style.DetailProductImageContainer}>
                                    <img src={mainProduct.image} alt="Product" className={style.DetailProductImage} />
                                </div>
                                <div className={style.DetailProductBenfits}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" /></svg>
                                        <span>{mainProduct.Students} دانشجو</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 256c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96zm-26.7 32h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" /></svg>
                                        <span>{mainProduct.Session} جلسه</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                        <span>{mainProduct.Time} ساعت</span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
                                        <span>پشتیبانی دائمی</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    : <h1>Loading....</h1>
            }
        </section>
    );
};

export default DetailProduct;