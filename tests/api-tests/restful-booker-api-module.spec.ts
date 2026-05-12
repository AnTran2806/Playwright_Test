import { test, expect } from '../../fixtures/hooks-fixture'
import apiPathData from "../../data/api-data/api-path-data.json"
import restfulApiData from "../../data/api-data/restful-booker-api-module.json"

// test("API testing", async ({ request }) => {
//   const bookingIds = await request.get('https://restful-booker.herokuapp.com/booking');
//   console.log(await bookingIds.json());
// });

// test("API test 2", async ({ request }) => {
//   const bookingDetails = await request.get("booking/1");
//   console.log(await bookingDetails.json());
// })

test("id - 8 [Restful-Booker > Booking] Verify that the user is able to fetch all the booking IDs using GET API and receive valid response.",
  {
    tag: ['@API', '@UAT'],
    annotation: {
      type: "Test Case",
      description: "Fetch all the booking IDs",
    }
  }, async ({ request }) => {
    const bookingIdsResp = await request.get(apiPathData.booking_path);
    const bookingIdsJsonResp = await bookingIdsResp.json();
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    // expect(bookingIdsResp.ok()).toBeTruthy();
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe(restfulApiData.content_type);
  }
)

test("id - 9 [Restful-Booker > Booking] Verify that the user is able to fetch booking details for a booking id using GET API and receive valid response.",
  {
    tag: ['@API', '@UAT'],
    annotation: {
      type: "Test Case",
      description: "Fetch booking details for a booking id",
    }
  }, async ({ request }) => {
    const bookingResp = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id}`)
    const bookingJsonResp = await bookingResp.json();
    expect(bookingResp.status()).toBe(200);
    expect(bookingResp.statusText()).toBe('OK');
    expect(bookingResp).not.toBeNull();
    expect(bookingJsonResp.firstname).toEqual(restfulApiData.firtname);
  })

test("id - 10 [Restful-Booker > Booking] Verify that the user is able to create new booking using Post API and receive valid response.",
  {
    tag: ['@API', '@UAT'],
    annotation: {
      type: "Test Case",
      description: "Create new booking",
    }
  }, async ({ request }) => {
    const createBookingResp = await request.post(apiPathData.booking_path, {
      data: restfulApiData.create_booking
    })
    const createBookingJsonResp = await createBookingResp.json();
    expect(createBookingResp.status()).toBe(200);
    expect(createBookingJsonResp.booking).toMatchObject(restfulApiData.create_booking)
  })

test("id - 11 [Restful-Booker > Booking] Verify that the user is able to update existing booking using Put API and receive valid response.",
  {
    tag: ['@API', '@UAT'],
    annotation: {
      type: "Test Case",
      description: "Update existing booking",
    }
  }, async ({ request, commonApiUtils }) => {
    const tokenValue = await commonApiUtils.createToken();
    const updateBookingResp = await request.put(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
      headers: {
        Cookie: `token=${tokenValue}`,
        'Content-Type': 'application/json',
      },
      data: restfulApiData.update_booking
    });
    const updateBookingJsonResp = await updateBookingResp.json();
    expect(updateBookingResp.status()).toBe(200);
    expect(updateBookingJsonResp).toMatchObject(restfulApiData.update_booking)
  })

test("id - 12 [Restful-Booker > Booking] Verify that the user is able to partially update existing booking using Patch API and receive valid response.",
  {
    tag: ['@API', '@UAT'],
    annotation: {
      type: "Test Case",
      description: "Partially update existing booking",
    }
  }, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const partialUpdateBookingResp = await request.patch(`${apiPathData.booking_path}/${restfulApiData.booking_id2}`, {
      headers: {
        Cookie: `token=${apiToken}`,
        'Content-Type': 'application/json',
      },
      data: restfulApiData.update_booking
    });
    const partialUpdateBookingJsonResp = await partialUpdateBookingResp.json();
    console.log(partialUpdateBookingJsonResp);
    expect(partialUpdateBookingResp.status()).toBe(200);
    expect(partialUpdateBookingJsonResp.firstname).toMatch(restfulApiData.update_partial_booking.firstname);
    expect(partialUpdateBookingJsonResp.lastname).toMatch(restfulApiData.update_partial_booking.lastname);
  })

test("id - 13 [Restful-Booker > Booking] Verify that the user is able to delete existing booking using Delete API and receive valid response.",
  {
    tag: ['@API', '@UAT'],
    annotation: {
      type: "Test Case",
      description: "Delete existing booking",
    }
  }, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const deleteBookingResp = await request.delete(`${apiPathData.booking_path}/${restfulApiData.booking_id3}`, {
      headers: {
        Cookie: `token=${apiToken}`,
        'Content-Type': 'application/json',
      }
    });
    // expect(deleteBookingResp.status()).toBe(201);
    // expect(deleteBookingResp.statusText()).toBe("Created");
    // const getBookingReps = await request.get(`${apiPathData.booking_path}/${restfulApiData.booking_id3}`)
    // expect(getBookingReps.status()).toBe(404);
    // expect(getBookingReps.statusText()).toBe("Not Found");
  })