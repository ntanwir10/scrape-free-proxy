# Proxy Scraper

A simple Node.js tool that fetches and saves HTTP proxy servers from ProxyScrape API.

## Description

`scrapeProxies.js` automatically fetches a list of public HTTP proxies and saves them in a structured JSON format for easy consumption by other applications.

## Features

- Fetches HTTP proxies from ProxyScrape's public API
- Filters empty entries
- Parses host:port format into structured JSON
- Saves results to a local file
- Built-in timeout filtering (10 seconds)
- Supports proxies from all countries

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install axios 
```

## Usage

Run the script using Node.js: `node scrapeProxies.js`

The script will:

1. Fetch proxies from ProxyScrape API
2. Process the data
3. Save the results to proxyList.json

## Output Format

The script generates a proxyList.json file with the following structure:

``` JSON
[
  {
    "host": "203.0.113.1",
    "port": 8080
  },
  {
    "host": "198.51.100.2",
    "port": 3128
  }
]
```

## Dependencies

- `axios`: For making HTTP requests to the proxy API

## Error Handling

The script includes basic error handling for:

- API request failures
- Data processing errors
- File system operations

## Limitations

- Relies on ProxyScrape API availability
- Limited to HTTP proxies
- No proxy validation implemented
- No automatic retry mechanism

## Disclaimer

This tool is for educational and legitimate use only. Users are responsible for:

- Adhering to ProxyScrape's terms of service
- Following local laws and regulations
- Using proxies responsibly

***Note: This project is not affiliated with ProxyScrape.***
