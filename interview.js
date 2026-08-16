
function renderInterview(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            🎤 Civil Interview
        </div>

        ${interview(
            "What is concrete?",
            "Concrete is a composite construction material made mainly from cement, fine aggregate, coarse aggregate and water."
        )}

        ${interview(
            "What is RCC?",
            "RCC means Reinforced Cement Concrete. Steel reinforcement is provided to resist tensile stresses."
        )}

        ${interview(
            "What is a benchmark?",
            "A benchmark is a fixed reference point having known elevation."
        )}

        ${interview(
            "What is slump test?",
            "Slump test is used to determine the workability/consistency of fresh concrete."
        )}
         ${interview(
            "What is slump test?",
            "Slump test is used to determine the workability/consistency of fresh concrete."
        )}
         ${interview(
            "What is slump test?",
            "Slump test is used to determine the workability/consistency of fresh concrete."
        )}
 ${interview(
    "আপনার Civil Engineering সম্পর্কে সংক্ষিপ্ত ধারণা কী?",
    "Civil Engineering হলো ভবন, রাস্তা, সেতু, পানি সরবরাহ, ড্রেনেজ ও অন্যান্য অবকাঠামো পরিকল্পনা, নকশা, নির্মাণ এবং রক্ষণাবেক্ষণের প্রকৌশল।"
)}

${interview(
    "Civil Engineer-এর প্রধান কাজ কী?",
    "Civil Engineer-এর প্রধান কাজ হলো Design, Planning, Estimation, Construction Supervision, Quality Control এবং Safety নিশ্চিত করা।"
)}

${interview(
    "কংক্রিটের প্রধান উপাদান কী কী?",
    "কংক্রিটের প্রধান উপাদান হলো Cement, Fine Aggregate, Coarse Aggregate এবং Water। প্রয়োজন অনুযায়ী Admixture ব্যবহার করা হয়।"
)}

${interview(
    "কংক্রিটের Grade বলতে কী বোঝায়?",
    "কংক্রিটের Grade দ্বারা নির্দিষ্ট সময়ে, সাধারণত ২৮ দিনে, অর্জিত নির্ধারিত Compressive Strength বোঝানো হয়।"
)}

${interview(
    "M20 Concrete বলতে কী বোঝায়?",
    "M20 হলো এমন একটি Concrete Grade যার Characteristic Compressive Strength ২৮ দিনে ২০ MPa।"
)}

${interview(
    "Water-Cement Ratio কেন গুরুত্বপূর্ণ?",
    "Water-Cement Ratio কংক্রিটের Strength, Workability, Durability এবং Permeability-কে উল্লেখযোগ্যভাবে প্রভাবিত করে।"
)}

${interview(
    "কংক্রিটে অতিরিক্ত পানি দিলে কী সমস্যা হয়?",
    "অতিরিক্ত পানি দিলে Workability বাড়লেও Strength কমতে পারে, Bleeding ও Segregation বাড়তে পারে এবং Concrete-এর Durability কমে যেতে পারে।"
)}

${interview(
    "Slump Test-এর উদ্দেশ্য কী?",
    "Fresh Concrete-এর Workability বা Consistency নির্ণয় করার জন্য Slump Test করা হয়।"
)}

${interview(
    "কখন Slump Test করা উচিত?",
    "Fresh Concrete ব্যবহার করার আগে এবং Concrete-এর Workability যাচাই করার জন্য Site-এ Slump Test করা হয়।"
)}

${interview(
    "Concrete Cube Test কেন করা হয়?",
    "Concrete-এর Compressive Strength নির্ণয় এবং নির্ধারিত Grade-এর Strength অর্জিত হয়েছে কি না যাচাই করার জন্য Cube Test করা হয়।"
)}

${interview(
    "Concrete Cube সাধারণত কোন সময়ে পরীক্ষা করা হয়?",
    "সাধারণত ৭ দিন ও ২৮ দিনে Concrete Cube-এর Compressive Strength পরীক্ষা করা হয়।"
)}

${interview(
    "৭ দিনের Cube Test কেন করা হয়?",
    "৭ দিনের Strength পরীক্ষা করে Concrete-এর প্রাথমিক Strength Development সম্পর্কে ধারণা পাওয়া যায় এবং ২৮ দিনের Strength-এর একটি প্রাথমিক indication পাওয়া যায়।"
)}

${interview(
    "Curing না করলে কী হতে পারে?",
    "Curing ঠিকভাবে না করলে Cement Hydration বাধাগ্রস্ত হয়, ফলে Concrete-এর Strength ও Durability কমে এবং Shrinkage Crack তৈরি হতে পারে।"
)}

${interview(
    "Concrete Curing-এর উদ্দেশ্য কী?",
    "Concrete-এ পর্যাপ্ত Moisture ও উপযুক্ত Temperature বজায় রেখে Cement Hydration চালু রাখা এবং Strength ও Durability বৃদ্ধি করা হলো Curing-এর উদ্দেশ্য।"
)}

${interview(
    "Concrete-এর Segregation কী?",
    "Concrete-এর Cement Paste, Fine Aggregate এবং Coarse Aggregate আলাদা হয়ে যাওয়াকে Segregation বলে।"
)}

${interview(
    "Bleeding কী?",
    "Fresh Concrete-এর পানি Concrete-এর উপরের পৃষ্ঠে উঠে আসার ঘটনাকে Bleeding বলে।"
)}

${interview(
    "Honeycombing কেন হয়?",
    "অপর্যাপ্ত Compaction, কম Workability, Reinforcement-এর অতিরিক্ত ঘনত্ব অথবা Concrete সঠিকভাবে Place না করার কারণে Honeycombing হতে পারে।"
)}

${interview(
    "Honeycombing হলে কী করা উচিত?",
    "প্রথমে Honeycombing-এর গভীরতা ও কারণ নির্ণয় করতে হবে। তারপর Engineer-এর নির্দেশ অনুযায়ী Repair Method নির্বাচন করতে হবে।"
)}

${interview(
    "Concrete Vibrator কেন ব্যবহার করা হয়?",
    "Fresh Concrete-এর ভিতরের Air Void কমিয়ে Proper Compaction এবং Dense Concrete পাওয়ার জন্য Vibrator ব্যবহার করা হয়।"
)}

${interview(
    "Over-Vibration কী?",
    "Concrete-কে প্রয়োজনের চেয়ে বেশি সময় Vibrate করাকে Over-Vibration বলে, যার ফলে Segregation হতে পারে।"
)}

${interview(
    "RCC-এর পূর্ণরূপ কী?",
    "RCC-এর পূর্ণরূপ হলো Reinforced Cement Concrete।"
)}

${interview(
    "RCC-তে Steel কেন ব্যবহার করা হয়?",
    "Concrete Compression-এ শক্তিশালী হলেও Tension-এ তুলনামূলক দুর্বল। তাই Tensile Force বহন করার জন্য Steel Reinforcement ব্যবহার করা হয়।"
)}

${interview(
    "Beam-এর প্রধান কাজ কী?",
    "Beam মূলত Slab বা অন্যান্য Structural Member থেকে Load গ্রহণ করে এবং Column বা Support-এ স্থানান্তর করে।"
)}

${interview(
    "Column-এর প্রধান কাজ কী?",
    "Column মূলত Building-এর Vertical Load বহন করে এবং সেই Load Foundation-এর মাধ্যমে মাটিতে স্থানান্তর করে।"
)}

${interview(
    "Slab-এর কাজ কী?",
    "Slab Floor বা Roof হিসেবে কাজ করে এবং ব্যবহারের Load Beam, Wall বা Column-এর মাধ্যমে Foundation-এর দিকে স্থানান্তর করে।"
)}

${interview(
    "Beam-এ প্রধানত কোন ধরনের Force কাজ করে?",
    "Beam-এ প্রধানত Bending Moment এবং Shear Force কাজ করে।"
)}

${interview(
    "Column-এ প্রধানত কোন ধরনের Load কাজ করে?",
    "Column-এ প্রধানত Axial Compression Load কাজ করে, তবে বাস্তব কাঠামোতে Bending Moment-ও থাকতে পারে।"
)}

${interview(
    "Dead Load কী?",
    "Building-এর Structural ও স্থায়ী উপাদানের নিজস্ব ওজনকে Dead Load বলে।"
)}

${interview(
    "Live Load কী?",
    "Building-এ মানুষ, Furniture, Equipment এবং পরিবর্তনশীল ব্যবহারজনিত Load-কে Live Load বলে।"
)}

${interview(
    "Foundation-এর কাজ কী?",
    "Foundation Building-এর Load নিরাপদভাবে মাটিতে স্থানান্তর করে এবং Excessive Settlement প্রতিরোধে সাহায্য করে।"
)}

${interview(
    "Shallow Foundation কী?",
    "যে Foundation তুলনামূলক কম গভীরতায় শক্ত মাটির উপর Load transfer করে তাকে Shallow Foundation বলে।"
)}

${interview(
    "Deep Foundation কী?",
    "যে Foundation গভীর স্তরের Soil বা Bearing Stratum পর্যন্ত Load transfer করে তাকে Deep Foundation বলে, যেমন Pile Foundation।"
)}

${interview(
    "Footing কী?",
    "Footing হলো Foundation-এর এমন একটি অংশ যা Column বা Wall-এর Load বৃহত্তর Area-তে ছড়িয়ে মাটিতে Transfer করে।"
)}

${interview(
    "Pile Foundation কখন ব্যবহার করা হয়?",
    "যখন উপরের Soil Layer পর্যাপ্ত Bearing Capacity দিতে পারে না অথবা Load গভীর শক্ত স্তরে Transfer করা প্রয়োজন হয়, তখন Pile Foundation ব্যবহার করা হতে পারে।"
)}

${interview(
    "Soil Bearing Capacity কী?",
    "মাটি নিরাপদভাবে যে পরিমাণ Load বহন করতে পারে তাকে তার Bearing Capacity বলা হয়।"
)}

${interview(
    "Settlement কী?",
    "Foundation-এর Load-এর কারণে মাটি ও Foundation নিচের দিকে বসে যাওয়ার ঘটনাকে Settlement বলে।"
)}

${interview(
    "Differential Settlement কী?",
    "একটি Building-এর বিভিন্ন অংশ অসমান পরিমাণে Settlement করলে তাকে Differential Settlement বলে।"
)}

${interview(
    "Damp Proof Course বা DPC কী?",
    "Building-এর Wall বা Floor-এ মাটি থেকে Moisture উপরে উঠে আসা প্রতিরোধ করার জন্য ব্যবহৃত Impervious Layer-কে DPC বলে।"
)}

${interview(
    "Plinth Level কী?",
    "Ground Level-এর উপরে Building-এর Floor Level-এর কাছাকাছি নির্ধারিত Horizontal Level-কে Plinth Level বলা হয়।"
)}

${interview(
    "Lintel কী?",
    "Door, Window বা অন্য Opening-এর উপরে থাকা Horizontal Structural Member-কে Lintel বলে।"
)}

${interview(
    "Brick-এর Quality কীভাবে পরীক্ষা করবেন?",
    "Brick-এর Shape, Size, Colour, Soundness, Hardness, Water Absorption এবং Strength পরীক্ষা করে Quality সম্পর্কে ধারণা নেওয়া যায়।"
)}

${interview(
    "Brick Water Absorption কেন গুরুত্বপূর্ণ?",
    "অতিরিক্ত Water Absorption হলে Brick Mortar-এর পানি শোষণ করে Masonry-এর Bond ও Durability-তে সমস্যা করতে পারে।"
)}

${interview(
    "Mortar-এর কাজ কী?",
    "Mortar Brick বা Block-কে একসঙ্গে Bond করে এবং Masonry-এর Load ও Stress যথাযথভাবে Transfer করতে সাহায্য করে।"
)}

${interview(
    "Surveying কী?",
    "ভূমির বিভিন্ন Point-এর Position, Distance, Angle এবং Elevation নির্ণয় ও তা Map বা Plan-এ উপস্থাপনের প্রক্রিয়াকে Surveying বলে।"
)}

${interview(
    "Leveling কী?",
    "বিভিন্ন Point-এর Relative Elevation বা Reduced Level নির্ণয় করার Surveying পদ্ধতিকে Leveling বলে।"
)}

${interview(
    "Benchmark কী?",
    "যে নির্দিষ্ট Point-এর Reduced Level বা Elevation জানা থাকে এবং Surveying-এ Reference হিসেবে ব্যবহার করা হয় তাকে Benchmark বলে।"
)}

${interview(
    "Auto Level কী কাজে ব্যবহার করা হয়?",
    "Surveying-এ বিভিন্ন Point-এর Elevation বা Reduced Level নির্ণয় করতে Auto Level ব্যবহার করা হয়।"
)}

${interview(
    "Total Station কী?",
    "Total Station হলো একটি Electronic Surveying Instrument যা Angle এবং Distance পরিমাপ করে এবং বিভিন্ন Survey Data সংগ্রহ ও গণনায় সাহায্য করে।"
)}

${interview(
    "BOQ কী?",
    "BOQ-এর পূর্ণরূপ Bill of Quantities। এটি Construction Project-এর বিভিন্ন কাজ ও পরিমাণের বিস্তারিত তালিকা।"
)}

${interview(
    "Estimation কী?",
    "Construction কাজের সম্ভাব্য Quantity, Material, Labour এবং Cost নির্ণয়ের প্রক্রিয়াকে Estimation বলে।"
)}

${interview(
    "Rate Analysis কী?",
    "একটি Construction Item-এর Unit Cost নির্ণয়ের জন্য Material, Labour, Equipment, Overhead এবং অন্যান্য প্রয়োজনীয় খরচ বিশ্লেষণ করাকে Rate Analysis বলে।"
)}

${interview(
    "Bar Bending Schedule বা BBS কী?",
    "RCC Structure-এর Reinforcement Bar-এর Diameter, Shape, Length, Quantity এবং অন্যান্য তথ্যের বিস্তারিত তালিকাকে Bar Bending Schedule বা BBS বলে।"
)}

${interview(
    "BBS কেন গুরুত্বপূর্ণ?",
    "Reinforcement-এর সঠিক Cutting, Bending, Quantity Estimation, Placement এবং Material Control-এর জন্য BBS গুরুত্বপূর্ণ।"
)}

${interview(
    "Development Length কী?",
    "Reinforcement Bar এবং Concrete-এর মধ্যে পর্যাপ্ত Bond তৈরি করে Bar-এর Stress নিরাপদভাবে Concrete-এ Transfer করার জন্য প্রয়োজনীয় Embedment Length-কে Development Length বলে।"
)}

${interview(
    "Lap Length কেন দেওয়া হয়?",
    "একটি Reinforcement Bar-এর দৈর্ঘ্য পর্যাপ্ত না হলে দুইটি Bar-কে নির্দিষ্ট Overlap-এর মাধ্যমে Force Transfer করার জন্য Lap Length দেওয়া হয়।"
)}

${interview(
    "Construction Joint কী?",
    "Concrete Casting-এর কাজ নির্দিষ্ট কারণে বিরতিতে সম্পন্ন হলে দুইটি Concrete Layer-এর সংযোগস্থলকে Construction Joint বলা হয়।"
)}

${interview(
    "Expansion Joint কেন দেওয়া হয়?",
    "Temperature পরিবর্তনের কারণে Structural Member-এর Expansion ও Contraction সামলানোর জন্য Expansion Joint দেওয়া হয়।"
)}

${interview(
    "Construction Site-এ Safety কেন গুরুত্বপূর্ণ?",
    "Worker, Engineer, Equipment এবং Structure-কে Accident ও ক্ষতি থেকে রক্ষা করার জন্য Construction Site Safety অত্যন্ত গুরুত্বপূর্ণ।"
)}

${interview(
    "PPE-এর পূর্ণরূপ কী?",
    "PPE-এর পূর্ণরূপ হলো Personal Protective Equipment। যেমন Safety Helmet, Safety Shoes, Gloves, Safety Vest এবং Safety Harness।"
)}

${interview(
    "Site Engineer-এর প্রধান দায়িত্ব কী?",
    "Site Engineer Drawing অনুযায়ী কাজ তদারকি করেন, Quality ও Quantity পরীক্ষা করেন, Labour ও Material সমন্বয় করেন এবং Safety ও Construction Progress পর্যবেক্ষণ করেন।"
)}

${interview(
    "Drawing এবং Site-এর কাজের মধ্যে মিল না থাকলে কী করবেন?",
    "নিজে থেকে পরিবর্তন না করে কাজটি সাময়িকভাবে থামিয়ে Drawing ও Site Condition যাচাই করতে হবে এবং Senior Engineer বা সংশ্লিষ্ট কর্তৃপক্ষের নির্দেশ নিতে হবে।"
)}

${interview(
    "Concrete ঢালাইয়ের আগে কী কী পরীক্ষা করবেন?",
    "Formwork, Reinforcement, Cover, Bar Diameter ও Spacing, Embedded Items, Level, Alignment, Cleanliness এবং Concrete Mix সম্পর্কিত বিষয়গুলো পরীক্ষা করতে হবে।"
)}

${interview(
    "Column Casting-এর আগে কী কী পরীক্ষা করবেন?",
    "Column-এর Location, Size, Vertical Alignment, Reinforcement, Stirrup Spacing, Concrete Cover, Formwork এবং Construction Joint পরীক্ষা করতে হবে।"
)}

${interview(
    "Beam Casting-এর আগে কী কী পরীক্ষা করবেন?",
    "Beam-এর Size, Level, Formwork, Reinforcement, Bar Spacing, Development/Lap, Cover, Supports এবং Embedded Items পরীক্ষা করতে হবে।"
)}

${interview(
    "Site-এ একজন Civil Engineer-এর জন্য সবচেয়ে গুরুত্বপূর্ণ বিষয় কী?",
    "Quality, Safety, Correct Drawing Implementation, Proper Measurement, Material Control এবং Construction Schedule অনুসরণ করা অত্যন্ত গুরুত্বপূর্ণ।"
)}

${interview(
    "আপনি যদি Site-এ কোনো ভুল Construction দেখতে পান, কী করবেন?",
    "ভুলটি নথিভুক্ত করে কাজটি প্রয়োজন হলে সাময়িকভাবে বন্ধ করব, Drawing ও Specification যাচাই করব এবং Senior Engineer-এর নির্দেশ অনুযায়ী Corrective Action নেব।"
)}


        ${interview(
            "What is curing?",
            "Curing is the process of maintaining adequate moisture and temperature in concrete for hydration and strength development."
        )}

    `;
}
