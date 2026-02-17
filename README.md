# L2 Team(PH) Assignment Project

## 📌 Project Overview

This project was built as an assignment for the PH Team.  
The main goal of this project was to demonstrate front-end development skills using modern web technologies.

## 🚀 Technologies Used

- HTML5
- Tailwind CSS
- DaisyUI
- JavaScript (ES6)

## 🛠 Author

Md Josim Uddin  
 MERN Stack Developer

## What is the difference between null and undefined?

-undefined: এর মানে হলো কোনো variable ডিক্লেয়ার করা আছে কিন্ত এর মান ডিফাইন করা হয়নি । JavaScript নিজে default হিসেবে দেয়।

-null : এর মানে হলো ইচ্ছা করে কোনো কিছুর মান empty বা no value সেট করে রাখা । Programmer নিজে assign করে।

## What is the use of the map() function in JavaScript? How is it different from forEach()?

-map ও foreach এর মধ্যে পার্থক্য হলো map নতুন array return করে কিন্তু foreach কোনো কিছু return করে না ।
-map array এর প্রতিটি elements নিয়ে কাজ করে অপরদিকে foreach array এর প্রতিটি element এ loop চালায়
-map Transformation এর জন্য অপরদিকে foreach Loop / Side effect এর জন্য ব্যবহার করা হয় ।

## What is the difference between == and ===?

- == কে জাভাস্ক্রিপ্টে Loose Equality বলা হয় । কিন্তু === জাভাস্ক্রিপ্টে Strict Equality বলা হয় ।
- == ভ্যাল্যু কম্পেয়ার করে এবং Type convert করে অপরদিকে === Value + Type দুইটাই compare করে এবং Type convert করে না ।

## What is the significance of async/await in fetching API data?

- async /await হলো asynchronous কোডকে synchronous স্টাইল এ লেখার উপায়।
  -এর মুল কাজ গুলো হলো :
- কোড পড়তে সহজ হয় (Readable)
- Error handle করা সহজ
- Promise handle সহজ হয়
- async / await এর মাধ্যমে খুব শহজে প্রমিস হ্যান্ডেল করা যায়

## Explain the concept of Scope in JavaScript (Global, Function, Block).

-JavaScript এ Scope হলো কোন ভ্যারিয়েবল কোথায় access বা ব্যবহার করা যাবে তা নির্ধারণ করে।

- Global :
  ভ্যারিয়েবল যেকোন জায়গা থেকে access করা যায় ।সাধারণত var, let, const global level এ declare করলে।
  -Function :
  ফাংশনের ভিতরে declare করা ভ্যারিয়েবল শুধুমাত্র ওই ফাংশনের ভিতরে access করা যায়। সাধারণত var function scope হয়।
  -Block :
  Curly braces {} এর ভিতরে declare করা ভ্যারিয়েবল শুধুমাত্র ওই block এর ভিতরে access করা যায়। সাধারণত let এবং const block scoped।
