#! /usr/bin/env node 

import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { executeCommand } from '../wordCount.js';

const usage = "\nUsage: ccwc <flag> file to run the command on"

const options = yargs(hideBin(process.argv))
    .usage(usage)
    .options({
        'count_words': {
            alias: 'w',
            describe: 'counts the number of words in a the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_bytes': {
            alias: 'c',
            describe: 'counts the number of bytes in a the file',
            demandOption: false,
            type: 'boolean'
        },
        'count_lines': {
            alias: 'l',
            describe: 'counts the number of lines in a the file',
            demandOption: false,
            type: 'boolean'
        },
    })
    .version(true)
    .help(true)
    .argv;

console.log(process.argv[2]);