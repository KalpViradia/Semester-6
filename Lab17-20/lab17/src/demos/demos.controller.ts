import {
  Controller,
  All,
  Get,
  HttpCode,
  Redirect,
  Header,
  Param,
} from '@nestjs/common';

@Controller('demos')
export class DemosController {
  // 1. @All Decorator - Handles ALL HTTP methods
  @All('all-methods')
  handleAllMethods(): string {
    return 'This route handles ALL HTTP methods (GET, POST, PUT, DELETE, PATCH, etc.)';
  }

  // 2. @HttpCode Decorator - Custom HTTP status code
  @Get('custom-status')
  @HttpCode(202) // Returns 202 Accepted instead of default 200 OK
  customHttpCode(): string {
    return 'This response has HTTP status code 202 (Accepted)';
  }

  @Get('created')
  @HttpCode(201)
  createdStatus(): string {
    return 'This response has HTTP status code 201 (Created)';
  }

  // 3. @Redirect Decorator - Redirect to another URL
  @Get('redirect-google')
  @Redirect('https://www.google.com', 302) // 302 Temporary Redirect
  redirectToGoogle(): void {
    // Redirects to Google
  }

  @Get('redirect-home')
  @Redirect('/', 301)
  redirectToHome(): void {
    // Redirects to home page
  }

  // Dynamic redirect based on logic
  @Get('redirect-dynamic')
  @Redirect('https://nestjs.com', 302)
  dynamicRedirect(): { url: string; statusCode: number } {
    // You can override the redirect URL by returning an object
    return { url: 'https://docs.nestjs.com', statusCode: 301 };
  }

  // 4. @Header Decorator - Custom response headers
  @Get('custom-header')
  @Header('X-Custom-Header', 'MyCustomValue')
  @Header('Cache-Control', 'no-cache')
  customHeaders(): string {
    return 'This response includes custom headers: X-Custom-Header and Cache-Control';
  }

  @Get('json-header')
  @Header('Content-Type', 'application/json')
  @Header('X-API-Version', '1.0')
  jsonWithHeaders(): object {
    return {
      message: 'Response with custom headers',
      apiVersion: '1.0',
    };
  }

  // 5. Route Wildcards / Multiple Parameters
  @Get('files/:folder/:filename')
  getFile(
    @Param('folder') folder: string,
    @Param('filename') filename: string,
  ): object {
    return {
      message: 'File route matched!',
      folder: folder,
      filename: filename,
      fullPath: `${folder}/${filename}`,
      description: 'Matches: /files/docs/readme, /files/images/logo',
    };
  }

  // Route with flexible category/subcategory pattern
  @Get('browse/:category/:subcategory/:item')
  browseItems(
    @Param('category') category: string,
    @Param('subcategory') subcategory: string,
    @Param('item') item: string,
  ): object {
    return {
      message: 'Browse route matched!',
      category: category,
      subcategory: subcategory,
      item: item,
      description: 'Matches: /browse/electronics/phones/iphone',
    };
  }

  // 6. Route Parameters

  // 6a. Get id from parameters and print it
  @Get('user/:id')
  getUserById(@Param('id') id: string): object {
    return {
      message: `Getting user with ID: ${id}`,
      userId: id,
    };
  }

  // 6b. Get prime numbers between start and end parameters
  @Get('primes/:start/:end')
  getPrimeNumbers(
    @Param('start') start: string,
    @Param('end') end: string,
  ): object {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);

    if (isNaN(startNum) || isNaN(endNum)) {
      return { error: 'Start and end must be valid numbers' };
    }

    if (startNum > endNum) {
      return { error: 'Start must be less than or equal to end' };
    }

    const primes = this.findPrimes(startNum, endNum);

    return {
      range: { start: startNum, end: endNum },
      count: primes.length,
      primeNumbers: primes,
    };
  }

  private isPrime(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private findPrimes(start: number, end: number): number[] {
    const primes: number[] = [];
    for (let i = start; i <= end; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  // 6c. Get page number and return start and end record numbers (5 records per page)
  @Get('pagination/:pageNo')
  getPagination(@Param('pageNo') pageNo: string): object {
    const page = parseInt(pageNo, 10);
    const recordsPerPage = 5;

    if (isNaN(page) || page < 1) {
      return { error: 'Page number must be a positive integer' };
    }

    const startRecord = (page - 1) * recordsPerPage + 1;
    const endRecord = page * recordsPerPage;

    return {
      pageNumber: page,
      recordsPerPage: recordsPerPage,
      startRecord: startRecord,
      endRecord: endRecord,
      message: `Page ${page} contains records from ${startRecord} to ${endRecord}`,
    };
  }

  @Get('all-params/:param1/:param2/:param3')
  getAllParams(@Param() params: Record<string, string>): object {
    return {
      message: 'All route parameters captured',
      parameters: params,
    };
  }
}
