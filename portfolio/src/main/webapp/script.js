// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandQuote() {
  const greetings =
      ['To live is to suffer, to survive is to find some meaning in suffering - Friedrich Nietzsche',
       'It does not matter how slowly you go as long as you do not stop - Confucius',
       'Cogito, ergo sum - Rene Descartes',
       'We are what we repeteadtly do. Exellence, then, is not an act, but a habit - Aristotle',
       'Happiness is the highest good - Aristotle',
       'Man is condemned to be free - Jean-Paul Sartre',
       'The only thing I know is that I know nothing - Socrates'
       ];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
