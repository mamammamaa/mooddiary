let currentMood = "";

const affirmations = {
  happy: [
    "You are doing great!",
  "Today is a good day to have a good day!",
  "You are a magnet for success and prosperity!",
  "You are worthy of all the good things in life!",
  "You are a positive influence on those around you!",
  "You are becoming the best version of youself!",
  "You are capable of achieving your dreams!", 
  ],

  sad: [
    "Your scars are symbols of your strength.",
  "You are not alone in your struggles.",
  "Your feelings are valid and deserve to be acknowledged.",
  "You have the power to heal and grow from your pain.",
  "You are resilient and can overcome any challenge.",
  "Your emotions are a natural part of being human.",
  "You are worthy of love and support, even in your darkest moments.",
  "Your bad days do not define you; they are just a part of your journey.",
  "It's okay to be sad again about things you thought you had healed from",
  "You are enough, even on days you don't feel like it."
    
  ],
  tired: [
    "If you are tired, then do it tired.",
    "I'm tired too, sis but we have DREAMS to chase!",
    "Rest is important, but so is your hustle!",
    "You are stronger than your fatigue!",
    "Tired but still grinding? That's the spirit!",
    "Your dreams are worth the tiredness!",
    "Keep pushing, even when you're tired. You've got this!",
    "I don't stop when I'm tired, I stop when I'm done!",
    
  ],
  angry: [
    "Anger does not solve anything. It builds nothing, but can destroy everything.",
  "You are in control of your emotions, not the other way around.",
  "Take a deep breath and let go of the anger. It will only weigh you down.",
  "Your anger is valid, but don't let it consume you.",
  "You have the power to choose how you react to situations, even when you're angry.",
  "Anger can be a powerful motivator for change, but it should never be used to harm others.",
  "Remember that forgiveness is a gift you give yourself, not just the person who wronged you.", 
  "You only win when your mind is stronger than your emotions."
    
  ],

  grateful: [
    "You are surrounded by love and support!",
  "You are grateful for all the good things in your life!" ,
  "Your gratitude attracts more positivity into your life!",
  "You are thankful for the lessons learned from challenges!",
  "Your grateful heart is a magnet for miracles!",
  "You appreciate the beauty in everyday moments!",
  "Your gratitude is a powerful force for happiness and fulfillment!"    
  ],

  lonely: [
    "You are on the path to finding your community.",
    "This moment is teaching me to love myself more",
    "My worth is not dependent on the presence of others.",
    "I am enough, even when I am alone.",
    "Being alone allows me to discover my true self.",
    "I am deserving of meaningful connections and relationships.",
    "I am not defined by my loneliness; I am defined by my strength and resilience."
  ],

  love: [
    "I am worthy of love and affection.",
  "I attract loving and supportive relationships into my life.",
  "I am grateful for the love that surrounds me.",
  "I give and receive love freely and joyfully.",
  "My heart is open to love and connection.",
  "I am deserving of a healthy and fulfilling romantic relationship.",
  "Love flows effortlessly into my life, bringing happiness and fulfillment."
  ],
  
  unmotivated: [
    "Tomorrow you'll wish you had started today.",
  "The secret to getting ahead is getting started.",
  "Don't wait for motivation, create it!",
  "You don't have to be great to start, but you have to start to be great.",
  "Your future self will thank you for the effort you put in today.",
  "Diva, it's time to lock in.",
  "Don't let comfort steal your future."

  ],

  hopeful: [
    "A new opportunity is just around the corner.",
    "Hope gives you the strength to keep going.",
    "Your future is brighter than you imagine.",
    "Hold on to hope; it will help you through today.",
    "The best is still ahead of you.",
    "Every step forward is a step toward something better.",
    "You are capable of creating the life you want."
  ],

  confused: [
    "Someday everything will make perfect sense. So for now, just laugh at the confusion, smile through the tears, and keep reminding yourself that everything happens for a reason.",
  "Confusion is a sign that you are learning and growing.",
  "It's okay to not have all the answers right now.",
  "Embrace the uncertainty and trust that clarity will come with time.",
  "Confusion can lead to new insights and perspectives.",
  "You are capable of navigating through confusion and finding your way.",
  "Remember that even the most successful people have experienced confusion at some point in their journey.",
  "Worrying does not take away tomorrow's troubles, it takes away today's peace."

  ]
  
};

function setMood(mood) {
  currentMood = mood;
  document.getElementById("output").innerHTML =
    "Mood selected: " + mood;
}

function generateAffirmation() {
  if (!currentMood) {
    document.getElementById("output").innerHTML =
      "Please select a mood first (≧◡≦)";
    return;
  }

  const list = affirmations[currentMood];
  const random = list[Math.floor(Math.random() * list.length)];

  document.getElementById("output").innerHTML = random;
}