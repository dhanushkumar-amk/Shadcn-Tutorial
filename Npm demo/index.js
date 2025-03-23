import {
    formatPreservingEncrypt,
    formatPreservingDecrypt,
    tokenize,
    detokenize,
    dynamicMask
  } from 'smart-data-masking';

  // Tokenize data
  const token = tokenize('Sensitive Information');
  console.log('Token:', token);

  // Detokenize data
  const originalData = detokenize(token);
  console.log('Original Data:', originalData);
